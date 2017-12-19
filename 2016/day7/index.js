"use strict";

var fileinput = require('fileinput');

var insideBrackets = /\[(\w*)\]/g;
var outsideBrackets = /\[\w*\]/g;
var bab = /(\w)(?!\1)(\w)\1/g;

var lineCount = 0;
var count = 0;
var sslCount = 0;
fileinput.input()
  .on('line', function(line) {
    lineCount++;
    var text = line.toString('utf8').trim();
    var tls = supportsTls(text);
    console.log(lineCount, 'supportsTls', tls);
    if (tls) {
      count++;
    }
    var ssl = supportsSsl(text);
    console.log('supportsSSl', ssl);
    if (ssl) {
      sslCount++;
    }
    //console.log(count, text)
  })
  .on('end', function() {
    console.log('tls',count);
    console.log('ssl', sslCount);
  });

var supportsSsl = function(text) {
  insideBrackets.lastIndex = 0;
  var outsides = text.split(outsideBrackets);
  console.log('outsides', outsides);
  var match = insideBrackets.exec(text);
  while (match) {
    console.log('match', match);
    bab.lastIndex = 0;
    var babMatch = bab.exec(match[1]);
    while (babMatch) {
      console.log(babMatch[0],'in inner',match[1]);
      var b = babMatch[1];
      var a = babMatch[2];
      for (let outer of outsides) {
        if (-1 !== outer.indexOf([a,b,a].join(''))) {
          console.log([a,b,a].join(''),'in outer', outer);
          return true;
        }
      }
      bab.lastIndex = babMatch.index + 1;
      babMatch = bab.exec(match[1]);
    }
    console.log('insideBrackets.lastIndex', insideBrackets.lastIndex);
    match = insideBrackets.exec(text);
  }
  return false;
};

var supportsTls = function(text) {

  console.log('\ntext', text);
  insideBrackets.lastIndex = 0;
  var match = insideBrackets.exec(text);
  //console.log('match', match);
  while (match) {
    //console.log('\tinsides', match[1]);
    if (isAbba(match[1])) {
      return false;
    }
    match = insideBrackets.exec(text);
  }
  var outsides = text.split(outsideBrackets);
  //console.log('\toutsides', outsides);

  for (let outer of outsides) {
    if (isAbba(outer)) {
      //console.log('\touter isAbba');
      return true;
    }
  }
  return false;
};

var isAbba = function(text) {
  var result = false;
  var stack = [];
  for (let c of text) {
    stack.unshift(c);
    if (stack.length >= 4 &&
        stack[0] !== stack[1] &&
        stack[0] === stack[3] &&
        stack[1] === stack[2]) {
      //console.log(count + 1, text, stack.slice(0,4).join(''), depth);
      result = true;
    }
  }
  //console.log('\t\tisAbba',text, result);
  return result;
};
