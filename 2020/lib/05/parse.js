"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var parse = function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    console.log(data);
};
exports.default = parse;
