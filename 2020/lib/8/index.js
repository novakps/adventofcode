"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString().trim();
    try {
        part1(data);
    }
    catch (e) {
        console.log(e);
    }
    console.log('part2: ', part2(data));
};
const part1 = (data) => {
    const instructions = data.split(/\n/).map(parseLine);
    return execute(instructions);
};
const parseLine = (line) => {
    const match = line.match(/^(nop|acc|jmp)\s([+-]\d+)/);
    if (!match) {
        return { operation: 'nil', argument: 0 };
    }
    const operation = match[1];
    const argument = parseInt(match[2], 10);
    return { operation, argument };
};
const execute = (instructions) => {
    let accumulator = 0;
    let pointer = 0;
    const executed = new Set();
    while (pointer < instructions.length) {
        if (executed.has(pointer)) {
            throw `Part1: infinite loop accumulator: ${accumulator}`;
        }
        executed.add(pointer);
        const instruction = instructions[pointer];
        //console.log({pointer, accumulator, instruction})
        if (!instruction) {
            console.log('null instruction');
            break;
        }
        const { operation, argument } = instruction;
        switch (operation) {
            case 'acc':
                accumulator = accumulator + argument;
                pointer++;
                break;
            case 'jmp':
                pointer = pointer + argument;
                break;
            case 'nop':
                pointer++;
                break;
            default:
                console.log(`invalid operation: ${operation}`);
        }
    }
    return accumulator;
};
const decorruption_map = {
    'jmp': 'nop',
    'nop': 'jmp',
    'acc': 'acc',
};
const part2 = (data) => {
    let corrupted_index = 0;
    while (true) {
        const instructions = data.split(/\n/).map(parseLine);
        const { operation: corrupted_operation, argument } = instructions[corrupted_index];
        const operation = decorruption_map[corrupted_operation];
        instructions[corrupted_index] = { operation, argument };
        try {
            return execute(instructions);
        }
        catch (e) {
            corrupted_index++;
        }
    }
};
