#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minimist_1 = __importDefault(require("minimist"));
var argv = minimist_1.default(process.argv.slice(2));
var day = argv.day || argv.d;
var inputFileName = argv._[0];
try {
    var parse = require('./' + day).default;
    parse(inputFileName);
}
catch (err) {
    console.error(err);
}
