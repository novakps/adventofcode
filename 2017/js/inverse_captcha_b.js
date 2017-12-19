#!/usr/local/bin/node
const stdin = require('stdin');
const _ = require('lodash');

stdin((text)=>{
  let sum = 0;
  gen = matched(text.trim())
  for (let pair of gen) {
    sum+=parseInt(pair, 10);
  }
  console.log(sum);
});

function* matched(text) {
  const length = text.length;
  let i = 0;

  while(i < text.length) { (text[i] === text[(i + (length / 2)) % length]) {
      yield text[i];
    }
    i++;
  }
};
