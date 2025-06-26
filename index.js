const roasts = [
  "Your code is so async, even promises ghost you.",
  "You write JavaScript like it's Java... and that's terrifying.",
  "Your Git history looks like you wrestled with a bear.",
  "You use `console.log` as your debugger — I see you.",
  "Even StackOverflow has given up on your questions.",
  "Your last commit message was 'final-final-FINAL-v2'.",
  "You use tabs and spaces... in the same file. Brave.",
  "Your codebase is a museum of forgotten patterns.",
  "You think semicolons are optional, like deodorant.",
  "You test in production. Respect."
];

function getRoast() {
  const random = Math.floor(Math.random() * roasts.length);
  return roasts[random];
}

// CLI mode
if (require.main === module) {
  console.log("🔥 Roast incoming...");
  console.log(getRoast());
}

// Export for Node.js usage
module.exports = { getRoast };
