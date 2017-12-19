var fileinput = require('fileinput');
var crypto = require('crypto');

function* integers() {
  var val = 0;
  while (true) {
    yield val;
    val++;
  }
};

function* integerStrings(doorId) {
  var stream = integers();
  while (true) {
    yield crypto.createHash('md5').update(doorId + String(stream.next().value)).digest('hex')
  }
};

function* startsWith5ZerosFilter(stream) {
  while (true) {
    var result = stream.next().value;
    if (result.startsWith('00000')) {
      yield result;
    }
  }
};

function* password(text) {
  var stream = startsWith5ZerosFilter(integerStrings(text));
  while (true) {
    yield stream.next().value.slice(5, 6);
  }
  console.log('\ndone');
};

function* password2(text) {
  var pw = '________'.split('');
  var stream = startsWith5ZerosFilter(integerStrings(text));
  while (pw.indexOf('_') > -1) {
    var hash = stream.next().value;
    var position = hash.slice(5, 6);
    var value = hash.slice(6, 7);
    if (position < 8 && pw[position] === '_') {
      pw[position] = value;
      yield pw.join('');
    }
  }
  return;
}

fileinput.input()
  .on('line', function(line) {
    var text = line.toString('utf8').trim();
    if (text.length < 1) {
      return;
    }
    var val;
    for (val of password2(text)) {
    //for (val of password(text)) {
      process.stdout.write(val + '\r');
    }
    console.log(val);
  });
