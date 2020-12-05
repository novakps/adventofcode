#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var minimist_1 = __importDefault(require("minimist"));
var argv = minimist_1.default(process.argv.slice(2));
var day = argv._[0];
var inputFileName = argv._[1];
var parse;
switch (day) {
    case 'day_5':
        parse = require('./day_5/parse').default;
        break;
    default:
        console.error(day + " is not a valid day.");
        break;
}
parse(inputFileName);
