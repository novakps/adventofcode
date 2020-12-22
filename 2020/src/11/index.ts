import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()
  const waiting_area = seats(data)
  const count = apply_rounds(waiting_area)
  console.log('part1: ', {count})
  //console.log('part2: ', data)
}

const seats = (data:string):string[][] => data.split(/\n/).map((line) => line.split(''))

const apply_rounds = (waiting_area: string[][]) => {
  let new_waiting_area = waiting_area
  while(changed) {
    new_waiting_area = apply_round(new_waiting_area)
  }
  return occupied_count(new_waiting_area)
}

const occupied_count = (area: string[][]) => {
  return area.reduce((accumulator, rows) => {
      return accumulator + rows.filter(col => col === OCCUPIED_SEAT).length
    }, 0)
}

const apply_round = (waiting_area: string[][]) => {
  changed = false
  const new_waiting_area = waiting_area.map((row, y) => row.map((type, x) => rules(type, x, y, waiting_area)))
  if (changed) {
    changed_count++
  }
  return new_waiting_area
}

let changed = true
let changed_count = 0

const rules = (type: string, x: number, y:number, waiting_area: string[][]) => {
  if ((type === EMPTY_SEAT) && roomy(x, y, waiting_area)) {
    changed = true
    return OCCUPIED_SEAT
  }
  if ((type === OCCUPIED_SEAT) && crowded(x, y, waiting_area)) {
    changed = true
    return EMPTY_SEAT
  }
  return type
}

const roomy = (x:number, y:number, waiting_area:string[][]): boolean => {
  return neighbors(x,y,waiting_area).every(type => type !== OCCUPIED_SEAT)
}

const crowded = (x:number, y:number, waiting_area:string[][]): boolean => {
  return neighbors(x, y, waiting_area).filter(type => type === OCCUPIED_SEAT).length >= 4
}

const STEPS = [-1, 0, 1]

const neighbors = (x:number, y:number, waiting_area:string[][]) :string[] => {
  const result: string[] = []
  STEPS.forEach((row_step) => {
    STEPS.forEach((col_step) => {
      if (row_step === 0 && col_step === 0) {
        return // can't be your own neighnor!
      }
      const row = waiting_area[y + row_step]
      if (row) {
        const type = row[x + col_step]
        if (type) {
          result.push(type)
        }
      }
    })
  })
  return result
}

const EMPTY_SEAT = 'L'
const OCCUPIED_SEAT = '#'
const FLOOR = '.'
