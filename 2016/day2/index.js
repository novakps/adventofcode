var fileinput = require('fileinput');
var _ = require('lodash');

var current_key = '5';

var code_position = {
  'U': '0',
  'D': '1',
  'L': '2',
  'R': '3'
};

// UDLR neighbors for basic keypad
// 1 2 3
// 4 5 6
// 7 8 9
var neighbors = {
  '1':['1', '4', '1', '2'],
  '2':['2', '5', '1', '3'],
  '3':['3', '6', '2', '3'],
  '4':['1', '7', '4', '5'],
  '5':['2', '8', '4', '6'],
  '6':['3', '9', '5', '6'],
  '7':['4', '7', '7', '8'],
  '8':['5', '8', '7', '9'],
  '9':['6', '9', '8', '9']
};

// UDLR neighbors for committe-designed keypad
//     1
//   2 3 4
// 5 6 7 8 9
//   A B C
//     D
var neighbors = {
  '1': ['1', '3', '1', '1'],
  '2': ['2', '6', '2', '3'],
  '3': ['1', '7', '2', '4'],
  '4': ['4', '8', '3', '4'],
  '5': ['5', '5', '5', '6'],
  '6': ['2', 'A', '5', '7'],
  '7': ['3', 'B', '6', '8'],
  '8': ['4', 'C', '7', '9'],
  '9': ['9', '9', '8', '9'],
  'A': ['6', 'A', 'A', 'B'],
  'B': ['7', 'D', 'A', 'C'],
  'C': ['8', 'C', 'B', 'C'],
  'D': ['B', 'D', 'D', 'D']

};

fileinput.input()
  .on('line', function(line) {
    var codes = line.toString('utf8').trim().split('');
    console.log(line.toString());
    current_key = find_key(current_key, codes);
    console.log(current_key);
  });

function find_key(key, codes) {
  return _.reduce(codes, function(key, code) {
    return move(key, code);
  }, key);
};

function move(key, code) {
  return neighbors[key][code_position[code]];
};
