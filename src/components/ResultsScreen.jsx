import { useState } from 'react';
import '../styles/ResultsScreen.css';

function getScoreColor(percent) {
  if (percent >= 85) return '#1a8a1a';
  if (percent >= 70) return '#2d7a2d';
  if (percent >= 50) return '#e67e00';
  return '#cc0000';
}

function formatPct(correct, total) {
  if (!total) return '—';
  return `${Math.round((correct / total) * 100)}%`;
}

function BreakdownTable({ title, headers, rows }) {
  return (
    <div className="breakdown-table-wrapper">
      <h3 style={styles.tableTitle}>{title}</h3>
      <table className="breakdown-table">
        <thead>
          <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReviewCard({ question, answerData }) {
  const { userAnswer, correctAnswer, isCorrect } = answerData;

  return (
    <div style={{ ...styles.reviewCard, ...(isCorrect ? styles.reviewCardCorrect : styles.reviewCardIncorrect) }}>
      {/* Header */}
      <div style={styles.cardHeader}>
        <div style={styles.cardHeaderLeft}>
          <span style={styles.questionNumber}>Question {question.questionNumber}</span>
          <div style={styles.metaTags}>
            <span style={styles.tag}>{question.type}</span>
            <span style={styles.tag}>{question.difficulty}</span>
            <span style={styles.tag}>{question.domain}</span>
          </div>
        </div>
        <span style={isCorrect ? styles.badgeCorrect : styles.badgeIncorrect}>
          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </span>
      </div>

      {/* Stimulus */}
      <p style={styles.stimulus}>{question.stimulus || ''}</p>

      {/* Stem */}
      <p style={styles.stem}>{question.stem || ''}</p>

      {/* Answer choices */}
      <div style={styles.choices}>
        {['A', 'B', 'C', 'D', 'E'].map(letter => {
          const isUserAnswer = letter === userAnswer;
          const isCorrectAnswer = letter === correctAnswer;

          let rowStyle = styles.choiceRow;
          let label = null;
          let labelStyle = styles.labelCorrect;

          if (isCorrectAnswer && isUserAnswer) {
            rowStyle = { ...styles.choiceRow, ...styles.choiceCorrect };
            label = 'Your answer · Correct';
          } else if (isCorrectAnswer) {
            rowStyle = { ...styles.choiceRow, ...styles.choiceCorrect };
            label = 'Correct answer';
          } else if (isUserAnswer) {
            rowStyle = { ...styles.choiceRow, ...styles.choiceUserWrong };
            label = 'Your answer';
            labelStyle = styles.labelWrong;
          }

          return (
            <div key={letter} style={rowStyle}>
              <span style={styles.choiceLetter}>{letter}</span>
              <div style={styles.choiceContent}>
                <span style={styles.choiceText}>{question.choices?.[letter] || ''}</span>
                {label && <span style={labelStyle}>{label}</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanations */}
      <div style={styles.explanationSection}>
        <p style={styles.explanationTitle}>Explanations</p>
        {['A', 'B', 'C', 'D', 'E'].map(letter => (
          <div
            key={letter}
            style={{
              ...styles.explanationItem,
              ...(letter === correctAnswer ? styles.explanationItemCorrect : {}),
            }}
          >
            <strong>({letter})</strong> {question.explanation?.[letter] || '—'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResultsScreen({ sessionResults, questions, startNewSection }) {
  const [btnHovered, setBtnHovered] = useState(false);

  if (!sessionResults) return null;

  const { totalCorrect, scorePercent, byType, byDifficulty, byDomain, answers } = sessionResults;
  const scoreColor = getScoreColor(scorePercent);

  const typeRows = Object.entries(byType)
    .map(([type, { correct, total }]) => ({ type, correct, total, ratio: total ? correct / total : 0 }))
    .sort((a, b) => a.ratio - b.ratio)
    .map(({ type, correct, total }) => [type, correct, total, formatPct(correct, total)]);

  const diffRows = ['Easy', 'Medium', 'Hard'].map(d => {
    const { correct, total } = byDifficulty[d] || { correct: 0, total: 0 };
    return [d, correct, total, formatPct(correct, total)];
  });

  const domainRows = Object.entries(byDomain)
    .map(([domain, { correct, total }]) => ({ domain, correct, total, ratio: total ? correct / total : 0 }))
    .sort((a, b) => a.ratio - b.ratio)
    .map(({ domain, correct, total }) => [domain, correct, total, formatPct(correct, total)]);

  return (
    <div style={styles.container}>
      {/* Score header */}
      <div style={styles.scoreHeader}>
        <h1 style={{ ...styles.scoreText, color: scoreColor }}>{totalCorrect} / 26 Correct</h1>
        <p style={{ ...styles.scorePercent, color: scoreColor }}>{scorePercent}%</p>
      </div>

      {/* Breakdown tables */}
      <div className="breakdown-tables">
        <BreakdownTable title="By Question Type" headers={['Type', 'Correct', 'Total', '%']} rows={typeRows} />
        <BreakdownTable title="By Difficulty"    headers={['Difficulty', 'Correct', 'Total', '%']} rows={diffRows} />
        <BreakdownTable title="By Domain"        headers={['Domain', 'Correct', 'Total', '%']} rows={domainRows} />
      </div>

      {/* Start New Section */}
      <div style={styles.newSectionRow}>
        <button
          style={btnHovered ? { ...styles.button, backgroundColor: '#333333' } : styles.button}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          onClick={startNewSection}
        >
          Start New Section
        </button>
      </div>

      <hr style={styles.divider} />

      {/* Question review */}
      <h2 style={styles.reviewTitle}>Question Review</h2>

      {questions.map(q => {
        const answerData = answers.find(a => a.questionNumber === q.questionNumber) || {};
        return <ReviewCard key={q.questionNumber} question={q} answerData={answerData} />;
      })}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '48px 24px 64px',
  },
  scoreHeader: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  scoreText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '4px',
  },
  scorePercent: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  tableTitle: {
    fontSize: '0.85rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: '8px',
  },
  newSectionRow: {
    marginBottom: '40px',
  },
  button: {
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
  divider: {
    border: 'none',
    borderTop: '1px solid #e0e0e0',
    marginBottom: '40px',
  },
  reviewTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: '24px',
  },
  reviewCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '32px',
  },
  reviewCardCorrect: {
    borderLeft: '4px solid #2d7a2d',
  },
  reviewCardIncorrect: {
    borderLeft: '4px solid #cc0000',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px',
  },
  cardHeaderLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
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
  badgeCorrect: {
    backgroundColor: '#e8f5e9',
    color: '#2d7a2d',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  badgeIncorrect: {
    backgroundColor: '#ffebee',
    color: '#cc0000',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    flexShrink: 0,
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
  choices: {
    marginBottom: '8px',
  },
  choiceRow: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '10px 14px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    marginBottom: '6px',
    backgroundColor: '#ffffff',
  },
  choiceCorrect: {
    backgroundColor: '#e8f5e9',
    borderColor: '#2d7a2d',
  },
  choiceUserWrong: {
    backgroundColor: '#e8f0fe',
    borderColor: '#1a73e8',
  },
  choiceLetter: {
    fontWeight: 'bold',
    color: '#555555',
    marginRight: '12px',
    minWidth: '16px',
    flexShrink: 0,
  },
  choiceContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  choiceText: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: '#1a1a1a',
  },
  labelCorrect: {
    fontSize: '0.72rem',
    fontWeight: 'bold',
    color: '#2d7a2d',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  labelWrong: {
    fontSize: '0.72rem',
    fontWeight: 'bold',
    color: '#1a73e8',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  explanationSection: {
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '6px',
    marginTop: '16px',
  },
  explanationTitle: {
    fontWeight: 'bold',
    fontSize: '0.85rem',
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    marginBottom: '12px',
  },
  explanationItem: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
    color: '#333333',
    marginBottom: '8px',
  },
  explanationItemCorrect: {
    borderLeft: '3px solid #2d7a2d',
    paddingLeft: '8px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
};
