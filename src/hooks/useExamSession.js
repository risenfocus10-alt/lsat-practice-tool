import { useState, useCallback } from 'react';
import generateQuestionPlan from '../utils/questionPlan';
import parseQuestionResponse from '../utils/parseQuestion';

// Parses raw SSE chunks from the Anthropic streaming format into plain text deltas.
function extractTextFromSSE(chunk) {
  let text = '';
  for (const line of chunk.split('\n')) {
    if (!line.startsWith('data:')) continue;
    const data = line.slice(5).trim();
    if (data === '[DONE]') continue;
    try {
      const event = JSON.parse(data);
      if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
        text += event.delta.text;
      }
    } catch (_) {
      // non-JSON SSE line (e.g. event: lines), skip
    }
  }
  return text;
}

// Module-level so it can be shared between startExam and retryQuestion
// without re-creating on every render. setQuestions / setError are stable
// useState dispatchers so passing them as args is equivalent to closure capture.
async function streamQuestion(planItem, isRetry, setQuestions, setError) {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        questionNumber: planItem.questionNumber,
        questionType: planItem.questionType,
        difficulty: planItem.difficulty,
        domain: planItem.domain,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP ${response.status}`);
    }

    // Insert placeholder entry so the UI can show the streaming text immediately
    if (!isRetry) {
      setQuestions(prev => [...prev, { ...planItem, rawText: '', streaming: true }]);
    } else {
      setQuestions(prev =>
        prev.map(q =>
          q.questionNumber === planItem.questionNumber
            ? { ...q, rawText: '', streaming: true }
            : q
        )
      );
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let rawText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const delta = extractTextFromSSE(decoder.decode(value, { stream: true }));
      if (delta) {
        rawText += delta;
        const snapshot = rawText;
        setQuestions(prev =>
          prev.map(q =>
            q.questionNumber === planItem.questionNumber
              ? { ...q, rawText: snapshot, streaming: true }
              : q
          )
        );
      }
    }

    const parsed = parseQuestionResponse(rawText);
    parsed.questionNumber = planItem.questionNumber;
    setQuestions(prev =>
      prev.map(q =>
        q.questionNumber === planItem.questionNumber
          ? { ...q, ...parsed, rawText, streaming: false }
          : q
      )
    );

    return true;
  } catch (err) {
    if (!isRetry) {
      return streamQuestion(planItem, true, setQuestions, setError);
    }
    setError({ questionNumber: planItem.questionNumber, message: err.message });
    return false;
  }
}

export default function useExamSession() {
  const [phase, setPhase] = useState('home');
  const [questions, setQuestions] = useState([]);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [sessionResults, setSessionResults] = useState(null);
  const [error, setError] = useState(null);

  const startExam = useCallback(async () => {
    setPhase('generating');
    setQuestions([]);
    setGenerationProgress(0);
    setUserAnswers({});
    setSessionResults(null);
    setError(null);

    const plan = generateQuestionPlan();

    // Split plan into batches of 3 and run each batch in parallel
    for (let i = 0; i < plan.length; i += 3) {
      const batch = plan.slice(i, i + 3);

      const results = await Promise.all(
        batch.map(planItem =>
          streamQuestion(planItem, false, setQuestions, setError).then(success => {
            if (success) setGenerationProgress(planItem.questionNumber);
            return success;
          })
        )
      );

      if (results.includes(false)) return; // error state was set inside streamQuestion
    }

    setPhase('exam');
  }, []);

  const selectAnswer = useCallback((questionNumber, letter) => {
    setUserAnswers(prev => ({ ...prev, [questionNumber]: letter }));
  }, []);

  // Returns null on success, or an array of unanswered question numbers.
  const submitExam = useCallback(() => {
    const unanswered = [];
    for (let i = 1; i <= 26; i++) {
      if (!userAnswers[i]) unanswered.push(i);
    }
    if (unanswered.length > 0) return unanswered;

    const answers = questions.map(q => ({
      questionNumber: q.questionNumber,
      questionType: q.type,
      difficulty: q.difficulty,
      domain: q.domain,
      userAnswer: userAnswers[q.questionNumber],
      correctAnswer: q.correctAnswer,
      isCorrect: userAnswers[q.questionNumber] === q.correctAnswer,
    }));

    const totalCorrect = answers.filter(a => a.isCorrect).length;
    const scorePercent = Math.round((totalCorrect / 26) * 100);

    const byType = {};
    const byDifficulty = {
      Easy: { correct: 0, total: 0 },
      Medium: { correct: 0, total: 0 },
      Hard: { correct: 0, total: 0 },
    };
    const byDomain = {};

    answers.forEach(({ questionType, difficulty, domain, isCorrect }) => {
      if (!byType[questionType]) byType[questionType] = { correct: 0, total: 0 };
      byType[questionType].total++;
      if (isCorrect) byType[questionType].correct++;

      byDifficulty[difficulty].total++;
      if (isCorrect) byDifficulty[difficulty].correct++;

      if (!byDomain[domain]) byDomain[domain] = { correct: 0, total: 0 };
      byDomain[domain].total++;
      if (isCorrect) byDomain[domain].correct++;
    });

    const results = {
      sessionId: Date.now().toString(),
      completedAt: new Date().toISOString(),
      totalCorrect,
      scorePercent,
      byType,
      byDifficulty,
      byDomain,
      answers,
    };

    localStorage.setItem('lsat_session', JSON.stringify(results));
    setSessionResults(results);
    setPhase('results');
    return null;
  }, [questions, userAnswers]);

  const startNewSection = useCallback(() => {
    setPhase('home');
    setQuestions([]);
    setGenerationProgress(0);
    setUserAnswers({});
    setSessionResults(null);
    setError(null);
  }, []);

  const retryQuestion = useCallback(async (questionNumber) => {
    const plan = generateQuestionPlan();
    const planItem = plan.find(p => p.questionNumber === questionNumber);
    if (!planItem) return;
    setError(null);
    await streamQuestion(planItem, false, setQuestions, setError);
  }, []);

  return {
    phase,
    questions,
    generationProgress,
    userAnswers,
    sessionResults,
    error,
    startExam,
    selectAnswer,
    submitExam,
    startNewSection,
    retryQuestion,
  };
}
