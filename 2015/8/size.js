var fs = require('fs');


var lines = function(data) {
  return data.split(/\n/);
};

var memSize = function(characters) {
  return count(iter(characters.slice(1,-1)));
};

var codeSize = function(line) {
  return line.length;
};

var chars = function(line) {
  return line.split('');
};

var count = function(iterator) {
  try {
    result = 0;
    var char;
    while (char = iterator()) {
      if (char === '\\') {
        var next = iterator();
        char+=next;
        if (next === 'x') {
          char+=iterator();
          char+=iterator();
        }
      }
      //console.log(char);
      result++;
    }
  } finally {
    //console.log('--------------');
    return result;
  }
};

var substitutions = {
  '\\': '\\\\',
    '"': '\\"'
};

var encode = function(chars) {
  if (chars.length === 0) {
    return '';
  }
  return '"' + chars.map(function(char) {
    var encoded = substitutions[char];
    if (encoded) {
      return encoded;
    }
    return char;
  }).join('') + '"';
};

var iter = function(arr) {
  var index = 0;
  return function() {
    if (index < arr.length) {
      var c = arr[index++];
      //console.log(c);
      return c;
    }
    throw new Error('end');
  };
};

var parse = function(line) {
  return codeSize(line) - memSize(chars(line));
};

var parse2 = function(line) {
  return codeSize(encode(chars(line))) - codeSize( line );
}

var doStuff = function(data) {
  //return lines(data).map(parse).reduce(sum, 0);
  return lines(data).map(parse2).reduce(sum);
};

var sum = function(a, b) {
  return a+b;
};

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(doStuff(data));
});
