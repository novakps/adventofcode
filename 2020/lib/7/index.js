"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString().trim();
    console.log('part1: ', part1(data));
    console.log('part2: ', part2(data));
};
const part1 = (data) => {
    const tree = rules_tree(data);
    console.log({ tree });
    return find_roots(new Set(), tree, 'shiny gold bag');
};
const part2 = (data) => {
    return 'not implemented';
};
const rules_tree = (data) => {
    const cleaned = data.replace(/\bbags\b/g, 'bag');
    const rules = cleaned.split(/\n/g).map(line => line.split(/ contain /));
    const tree = new Map();
    rules.map(rule => {
        const [container_type, contents] = rule;
        //console.log({contents})
        const matches = [...contents.matchAll(/(\d+)\s([a-z ]+)/g)].forEach(match => {
            const count = match[1];
            const type = match[2];
            if (!tree.has(type)) {
                tree.set(type, {});
            }
            tree.get(type)[container_type] = count;
        });
    });
    return tree;
};
const find_roots = (roots, tree, node) => {
    if (!node) {
        return;
    }
    roots.add(node);
    const edges = tree.get(node);
    if (edges) {
        Object.keys(edges).forEach((edge) => {
            if (!roots.has(edge)) {
                find_roots(roots, tree, edge);
            }
        });
    }
    return roots.size - 1;
};
