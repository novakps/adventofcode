"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
exports.default = (function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    var lines = data.split(/\r?\n/);
    var entries = lines.map(function (line) { return parseInt(line, 10); });
    entries.some(function (entry1) {
        return entries.some(function (entry2) {
            if ((entry1 + entry2 === 2020)) {
                console.log("two entries: " + entry1 * entry2);
                return true;
            }
        });
    });
    entries.some(function (entry1) {
        return entries.some(function (entry2) {
            return entries.some(function (entry3) {
                if ((entry1 + entry2 + entry3 === 2020)) {
                    console.log("three entries: " + entry1 * entry2 * entry3);
                    return true;
                }
            });
        });
    });
});
