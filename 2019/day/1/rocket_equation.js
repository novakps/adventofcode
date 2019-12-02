var readline = require('readline');

var rlWrapper = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let totalFuel = 0;
let totalFuelFuel = 0
rlWrapper.on('line', function (line) {
  const moduleMass = parseInt(line, 10)
  const moduleFuel = fuel(moduleMass)

  totalFuel += moduleFuel
  console.log(`moduleFuel: ${moduleFuel}`)
  const moduleFuelFuel = fuelFuel(moduleMass)
   totalFuelFuel += moduleFuelFuel
  console.log(`moduleFuelfuel: ${moduleFuelFuel}`)
});

rlWrapper.on('close', function() {
  console.log(`part1 Fuel: ${totalFuel}`)
  console.log(`part2 Fuel: ${totalFuelFuel}`)
})

const fuel = mass => {
  const fuelmass = Math.trunc(mass/3) - 2
  if (fuelmass < 0) {
    return 0
  }
  return fuelmass
}

const fuelFuel = (mass) => {
  if (mass) {
    const fuelmass = fuel(mass)
    console.log(`fuelmass ${fuelmass}`)
    return fuelmass + fuelFuel(fuelmass)
  }
  return 0
}
