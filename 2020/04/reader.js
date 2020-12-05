#!/usr/bin/env node

const fs = require('fs')
const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2))
const inputFileName = argv._[0]
const parse = require('./parse.js')

fs.readFile(inputFileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  parse.parse(data)
})
