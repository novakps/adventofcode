var fileinput = require('fileinput');
var _ = require('lodash');

var reLine = new RegExp(/(.*)-(\w+)\[([a-z]+)\]/g);
var dashes = new RegExp(/-/g);
var sectorIdSum = 0;
fileinput.input()
  .on('line', function(line) {
    var text = line.toString('utf8').trim();
    if (text.length < 1) {
      return;
    }
    //console.log(text);
    reLine.lastIndex = 0;
    var parsedLine = reLine.exec(text);
    var checksum = parsedLine[3];
    var sectorId = parseInt(parsedLine[2], 10);
    var encryptedName = parsedLine[1];
    var letters = encryptedName.replace(dashes, '');
    var freq = frequency(letters);
    //console.log(freq);
    var uniqLetters = _.keys(freq).sort();
    //console.log(uniqLetters);
    var lettersByFreq = _.sortBy(uniqLetters, function(letter) {
      return -freq[letter];
    });
    //console.log(lettersByFreq);
    var topFiveLetters = lettersByFreq.join('').substr(0,5);
    //console.log(letters, sectorId, checksum, topFiveLetters);
    if (topFiveLetters === checksum) {
      console.log(sectorId, decryptName(encryptedName, sectorId));
      sectorIdSum += sectorId;
    }
  })
  .on('end', function() {
    console.log('sectorIdSum', sectorIdSum);
  });

function frequency(letters) {
  return _.reduce(letters, function(frequencies, letter) {
    frequencies[letter] = _.defaultTo(frequencies[letter], 0) + 1;
    return frequencies;
  }, {})
};

function decryptName(encryptedName, shiftDistance) {
  return _.map(encryptedName.split(''), function(str) {
    return String.fromCharCode(((str.charCodeAt(0) - 97 + shiftDistance) % 26) + 97) ;
  }).join('');

}
