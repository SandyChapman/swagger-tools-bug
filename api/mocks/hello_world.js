'use strict';

var util = require('util');

module.exports = {
  hello: hello,
  post_hello: post_hello
};

function hello(req, res) {
  res.json(["abc", "abbbbc", "abbbbbbbc"]);
}

function post_hello(req, res) {
  res.json(["abc", "abbbbc", "abbbbbbbc"]);
}
