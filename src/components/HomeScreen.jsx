import { useState } from 'react';

export default function HomeScreen({ startExam }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>LSAT Logical Reasoning Practice</h1>
      <p style={styles.subtitle}>
        Generate an original 26-question LR section. Answer at your own pace.
        Review explanations after submission.
      </p>
      <button
        style={hovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={startExam}
      >
        Generate Section
      </button>
      <p style={styles.note}>No timer — time yourself externally</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '48px 24px',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#555555',
    textAlign: 'center',
    maxWidth: '540px',
    lineHeight: '1.6',
    marginBottom: '48px',
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
    marginBottom: '16px',
    transition: 'background-color 0.15s ease',
  },
  buttonHover: {
    backgroundColor: '#333333',
  },
  note: {
    fontSize: '0.85rem',
    color: '#888888',
  },
};
