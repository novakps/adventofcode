// execute like this:
// cat input.txt| node report_repair.js
var readline = require('readline');

var rlWrapper = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const entries = []
rlWrapper.on('line', (line) => {
  entries.push(parseInt(line, 10));
});

rlWrapper.on('close',  () => {
  entries.sort((a,b)=> a - b)

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
});
