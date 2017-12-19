var fileinput = require('fileinput');

var _ = require('lodash');

var validRowCount = 0;

var rows = [];
fileinput.input()
  .on('line', function(line) {
    var text = line.toString('utf8').trim();
    if (text.length > 0) {
      var row = _.map(text.split(/\s+/), function(side) {
        return parseInt(side, 10);
      });
      rows.push(row);
      // if (validTriangle(row)) {
      //   validRowCount++;
      // }
    }

  })
  .on('end', function() {
    console.log('validRowCount', validRowCount)
   // console.log(rows);
    var triangleCount = 0;
    var c = 0;
    while (c < 3) {
      var r = 0;
      var sides = [];
      while (r < rows.length) {
        sides.push(rows[r][c]);
        if (2 === r % 3) {

          if (validTriangle(sides)) {
            triangleCount++;
            console.log('good', sides, c , r);
          } else {
            console.log('bad ', sides, c, r);
          }
          sides = [];
        }
        r++;
      }
      c++;
    }
    console.log('validColumnWiseCount', triangleCount);
  });

function validTriangle(sides) {
  sides.sort(function(a, b) {
    return a - b;
  });
  return ((sides[0] + sides[1]) > sides[2]);
};
