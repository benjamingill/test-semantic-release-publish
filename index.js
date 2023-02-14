const { join } = require("lodash");

const tokens = [
  "Hello",
  "World",
  "With",
  "More"
];

module.export = () => console.log(join(tokens, ' '));
