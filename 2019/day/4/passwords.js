const _ = require('lodash')

const rangeMin = 236491
const rangeMax = 713787

function * range(minValue, maxValue) {
  let value = minValue
  while (value <= maxValue) {
    yield value
    value++
  }
}

function * passwords(iter) {
  for (const value of iter) {
    if (criteria(value)) {
      yield value
    }
  }
}

const criteria =(value) => {
  const digits = value.toString().split('')
  if (digits.length !== 6) {
    return false
  }
  const sorted = _.sortBy(digits)

  if (!_.isEqual(digits, sorted)) {
    return false
  }

  // added for part2
  const counts = _.countBy(digits)
  if (_.every(counts, count => count !== 2)) {
    return false
  }
  if(new Set(digits).size === digits.length) {
    return false
  }
  return true
}

const result = [...passwords(range(236491,713787))]
console.log(result)
console.log(result.length)
