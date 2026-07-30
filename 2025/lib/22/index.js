"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = (0, fs_1.readFileSync)(inputFileName).toString().trim();
    console.log(data);
};
