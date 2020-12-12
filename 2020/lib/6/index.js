"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString().trim();
    console.log('Par1 Customs Questions all counts:', all_counts(data));
    console.log('part2 every counts:', every_counts(data));
};
const all_counts = (data) => {
    const groups = data.split(/\n\n/).map((group) => {
        const letters = new Set([...group.matchAll(/([a-z])/g)].map(match => match[0]));
        return letters.size;
    });
    return groups.reduce((accumulator, count) => {
        return accumulator + count;
    }, 0);
};
const every_counts = (data) => {
    const groups = data.split(/\n\n/).map((group) => {
        const lines = group.split(/\n/).map((line) => {
            return new Set([...line.matchAll(/([a-z])/g)].map(match => match[0]));
        });
        const all_letters = lines.reduce((accumulator, line) => {
            return new Set([...accumulator, ...line]);
        }, new Set());
        const every_letter = [...all_letters].filter(letter => {
            return lines.every(line => line.has(letter));
        });
        return every_letter.length;
    });
    return groups.reduce((accumulator, count) => {
        return accumulator + count;
    }, 0);
};
