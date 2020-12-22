"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString().trim();
    console.log('part1: ', distribution(adaptors(data)));
    console.log('part2: ', allPaths(adaptors(data)));
};
const adaptors = (data) => data.split(/\n/).map((line) => parseInt(line, 10));
const distribution = (adaptors) => {
    const result = { 1: 1, 3: 1 }; // start 0 and end +3
    adaptors.sort((a, b) => a - b);
    for (var i = 1; i < adaptors.length; i++) {
        const step = adaptors[i] - adaptors[i - 1];
        result[step] = result[step] + 1;
    }
    return result[1] * result[3];
};
const allPaths = (adaptors) => {
    const start = 0;
    const device = Math.max(...adaptors) + 3;
    adaptors.sort((a, b) => a - b);
    const nodes = new Set([start, ...adaptors, device]);
    return path_count(start, device, nodes);
};
const STEPS = [1, 2, 3];
const neighbors = (position, nodes) => {
    const result = STEPS.map((step => {
        return position + step;
    })).filter((node) => {
        //console.log({node})
        return nodes.has(node);
    });
    //console.log({position, result, nodes})
    return result;
};
const PATH_COUNT_MEMO = new Map();
const path_count = (node, destination, nodes) => {
    if (node === destination) {
        //console.log({node, destination, nodes, result:1})
        return 1;
    }
    let result = PATH_COUNT_MEMO.get(node);
    if (result) {
        //console.log({node, destination, nodes, result})
        return result;
    }
    result = neighbors(node, nodes).reduce((accumulator, neighbor) => {
        return accumulator + path_count(neighbor, destination, nodes);
    }, 0);
    PATH_COUNT_MEMO.set(node, result);
    //console.log({node, destination, nodes, result})
    return result;
};
