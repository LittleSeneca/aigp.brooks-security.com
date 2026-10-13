// Flags quiz questions where a wrong option uses a restrictive word ("only",
// "solely", ...) and the correct option doesn't — test-takers learn to skip those.
// Run: node check_quiz_tells.js  (exits 1 and lists offenders)
eval(require('fs').readFileSync(__dirname + '/quiz-data.js', 'utf8').replace(/^const ALL_QUESTIONS/, 'global.ALL_QUESTIONS'));
const RESTRICTIVE = /\b(only|solely|exclusively|merely)\b/i;
const bad = ALL_QUESTIONS.filter(q => {
  const right = q.options.filter(o => q.answer.includes(o.letter));
  const wrong = q.options.filter(o => !q.answer.includes(o.letter));
  return !right.some(o => RESTRICTIVE.test(o.text)) && wrong.some(o => RESTRICTIVE.test(o.text));
});
bad.forEach(q => console.log(q.id));
console.log(`${bad.length} question(s) give away the answer with a restrictive word in a distractor`);
process.exit(bad.length ? 1 : 0);
