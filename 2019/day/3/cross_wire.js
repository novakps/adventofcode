const _ = require('lodash')
const readline = require('readline');

const rlWrapper = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const up = (x, y) => [x, ++y]
const down = (x, y) => [x, --y]
const right = (x, y) => [++x, y]
const left = (x, y) => [--x, y]
const MOVES = {
  U: up,
  D: down,
  L: left,
  R: right,
}

const paths = []
const regex = /([UDLR])(\d+)/
const crossingDistances = []
const delays = []

rlWrapper.on('line', (line) => {
  let otherPath;
  if(paths.length) {
    otherPath = paths[paths.length - 1]
  }
  const path = {}
  let [x, y] = [0, 0]
  let delay = 0
  const commands = line.split(',')

  commands.forEach(command => {
    const match = regex.exec(command)
    if(!match) {
      console.log(`ingnoring invalid command [${command}]`)
      return
    }
    const [,dir,distance] = match

    const move = MOVES[dir]
    if (!move) {
      console.log(`invalid dir: [${dir}]`)
    }

    for( var i = 0; i < distance; i++) {
      delay++
      [x, y] = move(x,y)
      const coords = `x${x}.y${y}`

      if (!_.has(path, coords)) {
        _.set(path, coords, delay)
      }

      const otherPathDelay = _.get(otherPath, coords)
      if (otherPathDelay) {
        crossingDistances.push(Math.abs(x) + Math.abs(y))
        delays.push(delay + otherPathDelay)
      }
    }
    paths.push(path)
  })
})

rlWrapper.on('close', () => {
  console.log(`minimum crossing distance: ${_.min(crossingDistances)}`)
  console.log(`minimum delay: ${_.min(delays)}`)
})
