#!/usr/local/bin/node
const stdin = require('stdin');
const _ = require('lodash');

stdin((text)=>{
  const rows = text.split('\n');
  cs = _.reduce(rows, (acc, row) => {
    return acc + checksum(row);
  }, 0);
  console.log(cs);
});

function checksum(text) {
  const values = text.split('\t');
  const numbers = _.map(values, value => parseInt(value, 10));
  const cs = _.max(numbers) - _.min(numbers);
  if (_.isNaN(cs)) {
    return 0;
  }
  return cs;
}
