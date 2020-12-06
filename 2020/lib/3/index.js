"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var _a = ['.', '#'], OPEN = _a[0], TREE = _a[1];
exports.default = (function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    var lines = data.split(/\r?\n/);
    var treesEncountered = treesPerSlope(lines, 3, 1);
    console.log("Part 1: Trees Encountered: " + treesEncountered);
    var slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    var product_of_slopes_trees = slopes.reduce(function (accumulator, _a) {
        var right_step = _a[0], down_step = _a[1];
        return accumulator * treesPerSlope(lines, right_step, down_step);
    }, 1);
    console.log("Part 2 product: " + product_of_slopes_trees);
});
var treesPerSlope = function (lines, right_step, down_step) {
    var right = 0;
    var down = 0;
    return lines.filter(function (line, index) {
        if (index < down) {
            return;
        }
        var square = line[right];
        //console.log({right, down, square, line})
        right = (right + right_step) % line.length;
        down = down + down_step;
        return square === TREE;
    }).length;
};
