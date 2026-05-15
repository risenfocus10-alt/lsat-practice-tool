import { useEffect, useRef } from 'react';
import '../styles/GeneratingScreen.css';

export default function GeneratingScreen({ questions, generationProgress, error, retryQuestion }) {
  const listRef = useRef(null);

  // Auto-scroll to bottom whenever a new question is added or text streams in
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [questions]);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Building your section...</h2>
      <p style={styles.progress}>
        Generating question {generationProgress} of 26
      </p>

      <div style={styles.list} ref={listRef}>
        {questions.map((q) => {
          const isStreaming = q.streaming === true;
          const hasError = error && error.questionNumber === q.questionNumber;

          // After streaming completes the parsed stimulus is available;
          // during streaming show rawText so the user sees tokens arrive.
          const displayText = isStreaming ? q.rawText : (q.stimulus || q.rawText || '');

          return (
            <div key={q.questionNumber} style={styles.questionItem}>
              <div style={styles.label}>
                Q{q.questionNumber} — {q.questionType}&nbsp;&nbsp;|&nbsp;&nbsp;
                {q.difficulty}&nbsp;&nbsp;|&nbsp;&nbsp;{q.domain}
              </div>

              {hasError ? (
                <div style={styles.errorBox}>
                  <span style={styles.errorText}>
                    Error generating this question.
                  </span>
                  <button
                    style={styles.retryButton}
                    onClick={() => retryQuestion(q.questionNumber)}
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <div
                  className={isStreaming ? 'question-streaming' : undefined}
                  style={{
                    ...styles.stimulusText,
                    color: isStreaming ? '#1a1a1a' : '#555555',
                    fontWeight: isStreaming ? '400' : '400',
                  }}
                >
                  {displayText || ' '}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 24px',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '8px',
  },
  progress: {
    fontSize: '0.9rem',
    color: '#555555',
    marginBottom: '32px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxHeight: 'calc(100vh - 160px)',
    overflowY: 'auto',
    paddingRight: '8px',
  },
  questionItem: {
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '20px',
  },
  label: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#888888',
    marginBottom: '8px',
  },
  stimulusText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
  },
  errorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#fff0f0',
    border: '1px solid #ffcccc',
    borderRadius: '6px',
    padding: '10px 14px',
  },
  errorText: {
    color: '#cc0000',
    fontSize: '0.9rem',
    flex: 1,
  },
  retryButton: {
    backgroundColor: '#cc0000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 14px',
    fontSize: '0.85rem',
    cursor: 'pointer',
    flexShrink: 0,
  },
};
