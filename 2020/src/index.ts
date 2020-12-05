#!/usr/bin/env node

import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const day = argv._[0]
const inputFileName = argv._[1]

let parse
switch (day) {
case 'day_5':
  parse = require('./day_5/parse').default
  break
default:
  console.error(`${day} is not a valid day.`)
  break
}
parse(inputFileName)
