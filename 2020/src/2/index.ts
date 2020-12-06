import { readFileSync } from 'fs'

export default (inputFileName: string) => {
  const data = readFileSync(inputFileName).toString()
  countValidPart1(data)
  countValidPart2(data)
}

const countValidPart1 = (data: string) => {
  const lines = data.split(/\r?\n/)
  const validPasswords = lines.filter((line) => {
    const {a: min, b:max, character, password} = parseLine(line)
    if (!password) {
      return false
    }
    const re = new RegExp(character, 'g')
    const count = (password.match(re) || []).length
    //console.log(line, min, max, password, count)
    return count >= min && count <= max
  })
  console.log(`Part one valid count: ${validPasswords.length}`)
}

const countValidPart2 = (data: string) => {
  const lines = data.split(/\r?\n/)
  const validPasswordsCount = lines.filter((line) => {
    const {a: pos1, b: pos2, character, password} = parseLine(line)
    //console.log({pos1, pos2, character, password, line})
    if (!password) {
      return false
    }
    //console.log(password[pos1 - 1], password[pos2 - 1])
    const firstMatches = password[pos1 - 1] === character
    const secondMatches = password[pos2 - 1] === character
    const valid = firstMatches ? !secondMatches : secondMatches
    return valid
  }).length
  console.log(`Part two valid count: ${validPasswordsCount}`)
}

const parseLine = (line: string) => {
  const [rule, password] = line.split(': ')
  const [ab, character] = rule.split(' ')
  const [a,b] = ab.split('-')
  return {a: parseInt(a, 10),
          b: parseInt(b, 10),
          character,
          password}
}
