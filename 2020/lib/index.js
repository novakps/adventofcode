#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const argv = minimist_1.default(process.argv.slice(2));
const day = argv.day || argv.d;
const inputFileName = argv._[0];
try {
    const parse = require('./' + day).default;
    parse(inputFileName);
}
catch (err) {
    console.error(err);
}
