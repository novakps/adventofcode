const _ = require('lodash')
const readline = require('readline')

const rlWrapper = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const orbits = {}

const addOrbit = (line) => {
  const [primaryBody, secondaryBody] = line.split(')')

  if (_.has(orbits, secondaryBody)) {
    console.log(`ERROR - duplicate ${secondaryBody}`)
    return
  }
  orbits[secondaryBody] = primaryBody
}

const orbitCount = (secondaryBody) => {
  const primaryBody = _.get(orbits, secondaryBody)
  if (primaryBody) {
    return 1 +
      orbitCount(primaryBody)
  }
  return 0
}

const calcChecksum = () => {
  let checksum = 0
  _.each(orbits, (primaryBode, secondaryBody) => {
    checksum += orbitCount(secondaryBody)
  })
  console.log( `checksum: ${checksum}`)
}

const pathToRoot = (body) => {

  const primaryBody = _.get(orbits, body)

  if (primaryBody) {
    const path = pathToRoot(primaryBody)
    path.push(body)
    return path
  }
  return [body]
}

const transferCount = (path1, path2) => {

  while (path1[0] === path2[0]) {
    path1.shift()
    path2.shift()
  }
  return path1.length + path2.length - 2
}

rlWrapper.on('line', addOrbit)
rlWrapper.on('close', () => {
  calcChecksum()
  const youPath = pathToRoot('YOU')
  const sanPath = pathToRoot('SAN')

  const orbitalTransfers = transferCount(youPath, sanPath)
  console.log(`orbitalTransfers ${orbitalTransfers}`)
})
