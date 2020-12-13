import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()
  const invalid_value = invalid(data)
  console.log('part1: ',invalid_value)
  console.log('part2: ',contiguous(data, invalid_value))
}

const PREAMBLE_SIZE = 25

const invalid = (data:string) => {
  const messages = lines(data)
  let next = PREAMBLE_SIZE
  while(valid(messages, next)) {
    next++
  }
  return messages[next]
}

const contiguous = (data:string, value: number) => {
  const messages = lines(data)
  let slice_size = 2
  let start = 0
  while(true) {
    while ((start + slice_size) < messages.length) {
      const slice = messages.slice(start, start + slice_size)
      const sum = slice.reduce((accumulator, val) => accumulator + val, 0)
      if (sum === value) {
        slice.sort((a,b) => a - b)
        const a = slice.shift() || 0
        const b = slice.pop() || 0
        return a + b
      }
      start++
    }
    start = 0
    slice_size++
  }
}

const lines = (data:string) => data.split(/\n/).map((line) => parseInt(line, 10))

const valid = (lines:number[], next:number) => {
  const value = lines[next]
  const preamble = lines.slice(next - PREAMBLE_SIZE, next)
  return preamble.some((a) => {
    return preamble.some((b) => {
      return (a + b) === value
    })
  })
}
