'use strict';

var util = require('util');

module.exports = {
  hello: hello
};

function hello(req, res) {
  res.json(["abc", "abbbbc", "abbbbbbbc"]);
}
