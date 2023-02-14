const { join } = require("lodash");

const tokens = [
  "Hello",
  "World",
  "With",
  "More",
  "Tokens"
];

module.export = () => console.log(join(tokens, ' '));
