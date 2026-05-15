export default function GeneratingScreen({ generationProgress }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Building your section...</h2>
      <p style={styles.progress}>Generating question {generationProgress} of 26</p>
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
  },
};
