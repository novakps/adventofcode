const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error('file does not exist');
      return;
    } else {
      throw err;
    }
  }
  for (c of chunckify(data)) {
    console.log(c);
  }
});


const re = /^([^(]+)|(\((\d+)[xX]](\d+))\)/g
const chunckify = function*(data) {
  var match = re.exec(data);
  while (match) {
    if (match[2]) {
      var length = parseInt(match[3], 10);
      var repeat = parseInt(match[4], 10);
      var matchSize = match[0].length;
      var start = re.lastIndex = match[0].length;
      var end = start + length;
      yield data.slice(start, end).repeat(repeat);
      re.lastIndex = end;
    } else {
      yield match[1];
    }
    re.exec(data);
  }
};
