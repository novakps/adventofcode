#!/usr/bin/env node

import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const day = argv.day || argv.d
const inputFileName = argv._[0]

try {
  const parse = require('./' + day).default
  parse(inputFileName)
} catch (err) {
  console.error(err)
}
