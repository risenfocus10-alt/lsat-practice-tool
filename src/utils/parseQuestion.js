export default function parseQuestionResponse(rawText) {
  const text = rawText.trim();

  const get = (pattern) => {
    const m = text.match(pattern);
    return m ? m[1].trim() : '';
  };

  const questionNumber = parseInt(get(/^QUESTION\s+(\d+)/m)) || null;
  const type = get(/^Type:\s+(.+)$/m);
  const difficulty = get(/^Difficulty:\s+(.+)$/m);
  const domain = get(/^Domain:\s+(.+)$/m);
  const correctAnswer = get(/^CORRECT ANSWER:\s+([A-E])/m);

  const choices = {};
  ['A', 'B', 'C', 'D', 'E'].forEach(letter => {
    const m = text.match(new RegExp(`^\\(${letter}\\)\\s+(.+)$`, 'm'));
    if (m) choices[letter] = m[1].trim();
  });

  const explanation = {};
  const explStart = text.indexOf('EXPLANATION:');
  if (explStart !== -1) {
    text.slice(explStart).split('\n').forEach(line => {
      const m = line.match(/^-\s+(?:Correct|Wrong)\s+\(([A-E])\):\s+(.+)/);
      if (m) explanation[m[1]] = m[2].trim();
    });
  }

  // Body between the Domain: line and the (A) choice line
  const domainLineMatch = text.match(/^Domain:.+$/m);
  const aIndex = text.search(/^\(A\)/m);

  let stimulus = '';
  let stem = '';

  if (domainLineMatch && aIndex !== -1) {
    const domainEnd = text.indexOf(domainLineMatch[0]) + domainLineMatch[0].length;
    const body = text.slice(domainEnd, aIndex).trim();
    const lines = body.split('\n').map(l => l.trim()).filter(Boolean);
    const stemIndex = lines.findLastIndex(l => l.endsWith('?'));
    if (stemIndex !== -1) {
      stem = lines[stemIndex];
      stimulus = lines.slice(0, stemIndex).join(' ');
    } else {
      // Fallback: last non-empty line is the stem
      stem = lines.pop() || '';
      stimulus = lines.join(' ');
    }
  }

  const skeletonStart = text.indexOf('LOGICAL SKELETON:');
  const questionHeaderMatch = text.match(/^QUESTION\s+\S+/m);
  const logicalSkeleton = skeletonStart !== -1 && questionHeaderMatch
    ? text.slice(
        skeletonStart + 'LOGICAL SKELETON:'.length,
        text.indexOf(questionHeaderMatch[0], skeletonStart)
      ).trim()
    : '';

  const summaryStart = text.indexOf('SUMMARY:');
  const anticipationStart = text.indexOf('ANTICIPATION:');

  const summary = summaryStart !== -1
    ? text.slice(
        summaryStart + 'SUMMARY:'.length,
        anticipationStart !== -1 ? anticipationStart : undefined
      ).trim()
    : '';

  const anticipation = anticipationStart !== -1
    ? text.slice(anticipationStart + 'ANTICIPATION:'.length).trim()
    : '';

  return { questionNumber, type, difficulty, domain, stimulus, stem, choices, correctAnswer, explanation, summary, anticipation, logicalSkeleton };
}
