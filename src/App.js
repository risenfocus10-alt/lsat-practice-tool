import useExamSession from './hooks/useExamSession';
import HomeScreen from './components/HomeScreen';
import GeneratingScreen from './components/GeneratingScreen';
import ExamScreen from './components/ExamScreen';
import ResultsScreen from './components/ResultsScreen';

export default function App() {
  const session = useExamSession();

  return (
    <div id="app-root">
      {session.phase === 'home' && (
        <HomeScreen startExam={session.startExam} />
      )}
      {session.phase === 'generating' && (
        <GeneratingScreen
          questions={session.questions}
          generationProgress={session.generationProgress}
          error={session.error}
          retryQuestion={session.retryQuestion}
        />
      )}
      {session.phase === 'exam' && (
        <ExamScreen
          questions={session.questions}
          userAnswers={session.userAnswers}
          selectAnswer={session.selectAnswer}
          submitExam={session.submitExam}
        />
      )}
      {session.phase === 'results' && (
        <ResultsScreen
          sessionResults={session.sessionResults}
          questions={session.questions}
          userAnswers={session.userAnswers}
          startNewSection={session.startNewSection}
        />
      )}
    </div>
  );
}
