#!/usr/bin/env node

const fs = require('fs')
const parseArgs = require('minimist')
const argv = parseArgs(process.argv.slice(2))
const inputFileName = argv._[0]

fs.readFile(inputFileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  parse(data)
})

const parse = (data) => {
  lines = data.split(/\r?\n/)
  entries = lines.map((line) => parseInt(line, 10))
  entries.some((entry1) => {
    return entries.some((entry2) => {
      if ((entry1 + entry2 === 2020)) {
        console.log(`two entries: ${entry1 * entry2}`)
        return true
      }
    })
  })

  entries.some((entry1) => {
    return entries.some((entry2) => {
      return entries.some((entry3) => {
        if ((entry1 + entry2 + entry3 === 2020)) {
          console.log(`three entries: ${entry1 * entry2 * entry3}`)
          return true
        }
      })
    })
  })
}
