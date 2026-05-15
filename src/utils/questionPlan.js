const TYPES = [
  'Flaw',                  // Q1  Easy
  'Inference',             // Q2  Easy
  'Structural Analysis',   // Q3  Easy
  'Weakener',              // Q4  Easy
  'Necessary Assumption',  // Q5  Easy
  'Flaw',                  // Q6  Easy
  'Strengthener',          // Q7  Easy
  'Inference',             // Q8  Easy
  'Structural Analysis',   // Q9  Easy
  'Weakener',              // Q10 Easy
  'Flaw',                  // Q11 Medium
  'Necessary Assumption',  // Q12 Medium
  'Sufficient Assumption', // Q13 Medium
  'Parallel Structure',    // Q14 Medium  ← must be Q14+
  'Strengthener',          // Q15 Medium
  'Inference',             // Q16 Hard
  'Structural Analysis',   // Q17 Hard
  'Weakener',              // Q18 Hard
  'Flaw',                  // Q19 Hard
  'Necessary Assumption',  // Q20 Hard
  'Inference',             // Q21 Hard
  'Structural Analysis',   // Q22 Hard
  'Sufficient Assumption', // Q23 Hard
  'Flaw',                  // Q24 Hard
  'Unexpected Result',     // Q25 Hard
  'Apply the Principle',   // Q26 Hard
];
// Counts: Flaw×5, Inference×4, Structural Analysis×4, Weakener×3,
// Strengthener×2, Necessary Assumption×3, Sufficient Assumption×2,
// Parallel Structure×1, Unexpected Result×1, Apply the Principle×1 = 26

const DOMAINS = [
  'Environmental science / ecology',
  'Economics and public policy',
  'Philosophy and ethics',
  'History and social science',
  'Biology / medicine',
  'Law-adjacent topics',
  'Technology and its social effects',
  'Psychology and behavior',
  'Political science',
];

function getDifficulty(n) {
  if (n <= 10) return 'Easy';
  if (n <= 15) return 'Medium';
  return 'Hard';
}

export default function generateQuestionPlan() {
  return TYPES.map((questionType, i) => ({
    questionNumber: i + 1,
    questionType,
    difficulty: getDifficulty(i + 1),
    domain: DOMAINS[i % DOMAINS.length],
  }));
}
