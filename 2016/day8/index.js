"use strict";

var fileinput = require('fileinput');
var _ = require('lodash');

var panel = [];
for (var i = 0; i < 6; i++) {
  panel.push('.'.repeat(50).split(''));
}

function print(panel) {
  for (let row of panel) {
    console.log(row.join(''));
  }
};

print (panel);
console.log('');


fileinput.input()
  .on('line', function(line) {
    if (line.length < 1) {
      return;
    }
    var text = line.toString('utf8').trim();
    console.log(text);
    parse(line);

  })
  .on('end', function() {
    console.log(countLights(panel));
    print(panel);

  });

function parse(line) {
  var rectRe = /(rect)\s(\d+)x(\d+)/;
  var match = rectRe.exec(line);
  if (match) {
    var command = match[1];
    var x = match[2];
    var y = match[3];
    rect(x,y);
    return;
  }
  var rotate = /rotate\s(column|row)\s(x|y)=(\d+)\sby\s(\d+)/;
  match = rotate.exec(line);
  if (match) {
    var axis = match[1];
    var index = match[3];
    var distance = match[4];
    if (axis === 'row') {
      rotateRow(index, distance);
    } else {
      rotateColumn(index, distance);
    }
  }
}

function rotateRow(row, distance) {
  while (distance > 0) {
    panel[row].unshift(panel[row].pop());
    distance --;
  }
};

function rotateColumn(col, distance) {
  while (distance > 0) {
    var row = panel.length - 1;
    var last = panel[row][col];
    while (row > 0) {
      panel[row][col] = panel[row - 1][col];
      row--;
    }
    panel[row][col] = last;
    distance--;
  }
};

function rect (x, y) {
  while (x > 0) {
    x--;
    var cols = y;
    while ( cols > 0) {
      cols--;
      //console.log(x,cols);
      panel[cols][x] = '#';
    }
  }
}

function countLights(panel) {
  return _.reduce(panel, function(acc, row) {
    return acc +  _.reduce(row, function(sum, light) {
      if (light === '#') {
        return sum + 1;
      }
      return sum;
    }, 0)
  }, 0);
};
