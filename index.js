#!/usr/bin/env node

const args = require("minimist")(process.argv.slice(2));

const roasts = {
  default: [
    "Your code is so async, even promises ghost you.",
    "You write JavaScript like it's Java... and that's terrifying.",
    "Your Git history looks like you wrestled with a bear.",
    "You use `console.log` as your debugger — I see you.",
    "Even StackOverflow has given up on your questions.",
    "Your last commit message was 'final-final-FINAL-v2'.",
    "You use tabs and spaces... in the same file. Brave.",
    "Your codebase is a museum of forgotten patterns.",
    "You think semicolons are optional, like deodorant.",
    "You test in production. Respect.",
  ],
  git: [
    "Your Git history looks like a Jackson Pollock painting.",
    "Your last merge had more conflicts than Twitter.",
    "You committed node_modules. Twice.",
    "You rebase like you're stirring a pot of spaghetti.",
    "Your commit messages are more dramatic than K-dramas.",
    "You resolved a conflict by deleting everything. Bold.",
    "You renamed 'final' to 'final_final_final'.",
    "You pushed to main with a 'fix everything' commit. Legendary.",
    "Your `git log` looks like Morse code.",
    "Your stash is where good code goes to die.",
  ],
  friendly: [
    "You’re trying your best. That’s roast-worthy enough 😅",
    "You use dark mode to hide your tears — relatable.",
    "Your code works... but we don’t know how.",
    "Even your rubber duck applauds your debugging skills.",
    "You name your variables like they’re your children. Cute.",
    "You have more TODOs than actual logic.",
    "Your linter is your therapist.",
    "You once fixed a bug and it fixed your life.",
    "You don’t write bad code — just misunderstood art.",
    "Your commit messages are a journal of personal growth.",
  ],
  savage: [
    "Even StackOverflow has blocked your IP.",
    "Your code compiles because the compiler gave up.",
    "Your CSS is a cry for help.",
    "Your project is so broken, even AI won't touch it.",
    "You test in production because you believe in chaos.",
    "Your code is like a horror movie — I can't look away.",
    "Your framework choice was a war crime.",
    "Your API design violates the Geneva Convention.",
    "You put all logic in one file. Bold. Illegal. Impressive.",
    "Your code runs — but only on your machine at midnight.",
  ],
};

function getRoast(category = "default") {
  const selected = roasts[category] || roasts["default"];
  const random = Math.floor(Math.random() * selected.length);
  return selected[random];
}

function showHelp() {
  console.log(`
🧨 Roast-a-Dev CLI

Usage:
  npx roast-a-dev                 # Get a default roast
  npx roast-a-dev --category=git # Roast based on a category
  npx roast-a-dev --help         # Show this help message

Available Categories:
  - default
  - git
  - friendly
  - savage
`);
}

// CLI entry
if (require.main === module) {
  const category = args.category;

  if (args.help || args.h) {
    showHelp();
  } else if (category && !roasts[category]) {
    console.log(`❌ Invalid category: "${category}"`);
    console.log(`👉 Run: npx roast-a-dev --help`);
  } else {
    const selectedCategory = category || "default";
    console.log(`🔥 Roast incoming...`);
    console.log(getRoast(selectedCategory));
  }
}

// Export for programmatic use
module.exports = { getRoast };
