"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString();
    const lines = data.split(/\r?\n/);
    const entries = lines.map((line) => parseInt(line, 10));
    entries.some((entry1) => {
        return entries.some((entry2) => {
            if ((entry1 + entry2 === 2020)) {
                console.log(`two entries: ${entry1 * entry2}`);
                return true;
            }
        });
    });
    entries.some((entry1) => {
        return entries.some((entry2) => {
            return entries.some((entry3) => {
                if ((entry1 + entry2 + entry3 === 2020)) {
                    console.log(`three entries: ${entry1 * entry2 * entry3}`);
                    return true;
                }
            });
        });
    });
};
