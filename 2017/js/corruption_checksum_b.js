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
  const numbers = _.sortBy(_.map(values, value => parseInt(value, 10)), value => -value);
  const cs = evenlyDivided(numbers);

  if (cs) {
    return cs;
  }
  return 0;
}

function evenlyDivided(numbers) {
  let i = 0;
  while(i < numbers.length - 1) {
    let j = numbers.length - 1;
    while(j >=0) {
      //console.log(i,j, numbers[i], numbers[j], numbers[i] / numbers[j]);
      if ((numbers[i] !== numbers[j]) && numbers[i] % numbers[j] === 0) {
        return numbers[i] / numbers[j];
      }
      j--;
    }
    i++;
  }
}
