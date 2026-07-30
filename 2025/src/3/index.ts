import { readFileSync } from 'fs'

const maxInSlice = (joltages: number[], start: number, end: number) => {
    return Math.max(...joltages.slice(start, end))
}

const second = (bank: number[], firstDigit: number) => {
    const firstIndex = bank.findIndex((battery) => battery === firstDigit)
    //console.log({ bank, firstDigit, firstIndex })
    return Math.max(...bank.slice(firstIndex + 1))
}

const part1Joltage = (joltages: number[]) => {
    const firstDigit = maxInSlice(joltages, 0, -1)
    const secondDigit = second(joltages, firstDigit)
    //       console.log({ bank, firstDigit, secondDigit })
    return ((firstDigit * 10) + secondDigit)
}

const posFirstMaxInSlice = (joltages: number[], start: number, end: number) => {
    const max = maxInSlice(joltages, start, end)
    return joltages.findIndex((val) => val === max)
}

const part2Joltage = (joltages: number[]) => {
    console.log({ joltages })
    const position_1 = posFirstMaxInSlice(joltages, 0, -12)
    const position_2 = posFirstMaxInSlice(joltages, position_1, -12)
    console.log({ position_1, position_2 })
    return 0
}

export default (inputFileName: string) => {
    const data = readFileSync(inputFileName).toString().trim()
    //console.log({ data })
    const banks = data.split(/\r?\n/)
    //console.log({ banks })
    var part1Total = 0
    var part2Total = 0
    banks.map((bank) => {
        const joltages = bank.split('').map((battery) => parseInt(battery, 10))
        part1Total += part1Joltage(joltages)
        part2Total += part2Joltage(joltages)
    })
    console.log({ part1Total, part2Total })
}
