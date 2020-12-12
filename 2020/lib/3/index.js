"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const [OPEN, TREE] = ['.', '#'];
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString();
    const lines = data.split(/\r?\n/);
    const treesEncountered = treesPerSlope(lines, 3, 1);
    console.log(`Part 1: Trees Encountered: ${treesEncountered}`);
    const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
    const product_of_slopes_trees = slopes.reduce((accumulator, [right_step, down_step]) => {
        return accumulator * treesPerSlope(lines, right_step, down_step);
    }, 1);
    console.log(`Part 2 product: ${product_of_slopes_trees}`);
};
const treesPerSlope = (lines, right_step, down_step) => {
    let right = 0;
    let down = 0;
    return lines.filter((line, index) => {
        if (index < down) {
            return;
        }
        const square = line[right];
        //console.log({right, down, square, line})
        right = (right + right_step) % line.length;
        down = down + down_step;
        return square === TREE;
    }).length;
};
