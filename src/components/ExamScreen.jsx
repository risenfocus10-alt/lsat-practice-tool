import { useState, useRef } from 'react';
import '../styles/ExamScreen.css';

export default function ExamScreen({ questions, userAnswers, selectAnswer, submitExam }) {
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [submitError, setSubmitError] = useState('');
  const [submitHovered, setSubmitHovered] = useState(false);
  const questionRefs = useRef({});

  const answeredCount = questions.filter(q => userAnswers[q.questionNumber]).length;
  const progressPercent = (answeredCount / 26) * 100;

  const handleSelectAnswer = (questionNumber, letter) => {
    selectAnswer(questionNumber, letter);
    // Clear flag once the user answers a previously flagged question
    if (flaggedQuestions.has(questionNumber)) {
      setFlaggedQuestions(prev => {
        const next = new Set(prev);
        next.delete(questionNumber);
        return next;
      });
    }
  };

  const handleSubmit = () => {
    const result = submitExam();
    if (result === null) return; // phase → 'results', component unmounts

    setFlaggedQuestions(new Set(result));
    setSubmitError(
      `Please answer all questions before submitting. ${result.length} question${result.length !== 1 ? 's' : ''} remaining.`
    );

    const firstRef = questionRefs.current[result[0]];
    if (firstRef) firstRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* Fixed progress bar — display only */}
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBarFill, width: `${progressPercent}%` }} />
      </div>

      <div style={styles.container}>
        {questions.map(q => {
          const selected = userAnswers[q.questionNumber];
          const isFlagged = flaggedQuestions.has(q.questionNumber);

          return (
            <div
              key={q.questionNumber}
              ref={el => (questionRefs.current[q.questionNumber] = el)}
              style={{ ...styles.card, ...(isFlagged ? styles.cardFlagged : {}) }}
            >
              {/* Card header */}
              <div style={styles.cardHeader}>
                <span style={styles.questionNumber}>Question {q.questionNumber}</span>
                <div style={styles.metaTags}>
                  <span style={styles.tag}>{q.type}</span>
                  <span style={styles.tag}>{q.difficulty}</span>
                  <span style={styles.tag}>{q.domain}</span>
                </div>
              </div>

              {/* Stimulus */}
              <p style={styles.stimulus}>{q.stimulus || ''}</p>

              {/* Stem */}
              <p style={styles.stem}>{q.stem || ''}</p>

              {/* Answer choices */}
              <div>
                {['A', 'B', 'C', 'D', 'E'].map(letter => {
                  const isSelected = selected === letter;
                  return (
                    <div
                      key={letter}
                      className="answer-choice"
                      style={{
                        ...styles.choiceRow,
                        ...(isSelected ? styles.choiceSelected : {}),
                      }}
                      onClick={() => handleSelectAnswer(q.questionNumber, letter)}
                    >
                      <span style={styles.choiceLetter}>{letter}</span>
                      <span style={styles.choiceText}>{q.choices?.[letter] || ''}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Submit section */}
        <div style={styles.submitSection}>
          <p style={styles.answeredCount}>{answeredCount} of 26 questions answered</p>
          {submitError && <p style={styles.submitError}>{submitError}</p>}
          <button
            style={submitHovered ? { ...styles.submitButton, backgroundColor: '#333333' } : styles.submitButton}
            onMouseEnter={() => setSubmitHovered(true)}
            onMouseLeave={() => setSubmitHovered(false)}
            onClick={handleSubmit}
          >
            Submit Exam
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  progressBarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    backgroundColor: '#e0e0e0',
    zIndex: 1000,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#1a73e8',
    transition: 'width 0.3s ease',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 24px 64px',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
    scrollMarginTop: '16px',
  },
  cardFlagged: {
    backgroundColor: '#fff0f0',
    borderLeft: '3px solid #cc0000',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
  },
  questionNumber: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#1a1a1a',
  },
  metaTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    color: '#555555',
    fontSize: '0.75rem',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  stimulus: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  stem: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
    lineHeight: '1.5',
    color: '#1a1a1a',
    marginBottom: '16px',
  },
  choiceRow: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '12px 16px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    marginBottom: '8px',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    transition: 'background-color 0.1s ease',
  },
  choiceSelected: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
    borderLeftWidth: '3px',
  },
  choiceLetter: {
    fontWeight: 'bold',
    color: '#555555',
    marginRight: '12px',
    minWidth: '16px',
    flexShrink: 0,
  },
  choiceText: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#1a1a1a',
  },
  submitSection: {
    borderTop: '1px solid #e0e0e0',
    paddingTop: '24px',
    marginTop: '8px',
  },
  answeredCount: {
    fontSize: '0.95rem',
    color: '#555555',
    marginBottom: '12px',
  },
  submitError: {
    color: '#cc0000',
    fontSize: '0.9rem',
    backgroundColor: '#fff0f0',
    border: '1px solid #ffcccc',
    borderRadius: '6px',
    padding: '10px 14px',
    marginBottom: '16px',
  },
  submitButton: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '14px 32px',
    fontSize: '1rem',
    cursor: 'pointer',
    minWidth: '200px',
    transition: 'background-color 0.15s ease',
  },
};
