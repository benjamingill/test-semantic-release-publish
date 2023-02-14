const { join } = require("lodash");

const tokens = [
  "Hello",
  "World",
];

module.export = () => console.log(join(tokens, ' '));
