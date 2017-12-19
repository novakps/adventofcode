var fileinput = require('fileinput');
var _ = require('lodash');

var positions = {};

function maxFreqChars(positionObj) {
  _.forEach(positionObj, function(freqs, position) {
    var inverted = _.invert(freqs);
    var max = _.max(_.keys(inverted));
    process.stdout.write(inverted[max]);
  });
};

function minFreqChars(positionObj) {
  _.forEach(positionObj, function(freqs, position) {
    var inverted = _.invert(freqs);
    var min = _.min(_.keys(inverted));
    process.stdout.write(inverted[min]);
  });
};

fileinput.input()
  .on('line', function(line) {
    var text = line.toString('utf8').trim();
    var len = text.length;
    if (len < 1) {
      return;
    }
    for (var i = 0; i < len; i++) {
      var char = text[i];
      var freqs = _.get(positions, i, {});
      var freq = _.get(freqs, char, 0) + 1;
      _.set(freqs, char, freq);
      _.set(positions, i, freqs);
    }
  })
  .on('end', function() {
    maxFreqChars(positions);
    console.log('');
    minFreqChars(positions);
  });
