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
    const paragraphs = body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    stem = paragraphs.pop() || '';
    stimulus = paragraphs.join('\n\n');
  }

  return { questionNumber, type, difficulty, domain, stimulus, stem, choices, correctAnswer, explanation };
}
