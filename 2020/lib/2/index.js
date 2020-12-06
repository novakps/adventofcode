"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
exports.default = (function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    countValidPart1(data);
    countValidPart2(data);
});
var countValidPart1 = function (data) {
    var lines = data.split(/\r?\n/);
    var validPasswords = lines.filter(function (line) {
        var _a = parseLine(line), min = _a.a, max = _a.b, character = _a.character, password = _a.password;
        if (!password) {
            return false;
        }
        var re = new RegExp(character, 'g');
        var count = (password.match(re) || []).length;
        //console.log(line, min, max, password, count)
        return count >= min && count <= max;
    });
    console.log("Part one valid count: " + validPasswords.length);
};
var countValidPart2 = function (data) {
    var lines = data.split(/\r?\n/);
    var validPasswordsCount = lines.filter(function (line) {
        var _a = parseLine(line), pos1 = _a.a, pos2 = _a.b, character = _a.character, password = _a.password;
        //console.log({pos1, pos2, character, password, line})
        if (!password) {
            return false;
        }
        //console.log(password[pos1 - 1], password[pos2 - 1])
        var firstMatches = password[pos1 - 1] === character;
        var secondMatches = password[pos2 - 1] === character;
        var valid = firstMatches ? !secondMatches : secondMatches;
        return valid;
    }).length;
    console.log("Part two valid count: " + validPasswordsCount);
};
var parseLine = function (line) {
    var _a = line.split(': '), rule = _a[0], password = _a[1];
    var _b = rule.split(' '), ab = _b[0], character = _b[1];
    var _c = ab.split('-'), a = _c[0], b = _c[1];
    return { a: parseInt(a, 10),
        b: parseInt(b, 10), character: character,
        password: password };
};
