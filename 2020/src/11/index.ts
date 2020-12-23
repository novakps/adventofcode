import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()
  const waiting_area = seats(data)
  let count = apply_rounds(waiting_area)
  console.log('part1: ', {count})
  neighbors = visibles
  crowded = five_is_a_crowd
  changed = true
  count = apply_rounds(waiting_area)
  console.log('part2: ', {count})
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
  //console.log('\n')
  //console.log(waiting_area.join('\n'))
  changed = false
  const new_waiting_area = waiting_area.map((row, y) => row.map((type, x) => rules(type, x, y, waiting_area)))
  return new_waiting_area
}

let changed = true

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

const is_a_crowd = (x:number, y:number, waiting_area:string[][], max_neighbors:number): boolean => {
  return neighbors(x, y, waiting_area).filter(type => type === OCCUPIED_SEAT).length >= max_neighbors
}

const four_is_a_crowd = (x:number, y:number, waiting_area:string[][]): boolean => {
  return is_a_crowd(x, y, waiting_area, 4)
}

const five_is_a_crowd = (x:number, y:number, waiting_area:string[][]): boolean => {
  return is_a_crowd(x, y, waiting_area, 5)
}

const STEPS = [-1, 0, 1]

const adjacents = (x:number, y:number, waiting_area:string[][]) :string[] => {
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

const DIRECTIONS = [[-1, -1],
                    [0, -1],
                    [1, -1],
                    [-1, 0],
                    [1, 0],
                    [-1, 1],
                    [0, 1],
                    [1, 1]
                   ]

const visibles = (x:number, y:number, waiting_area:string[][]) :string[] => {
  const result:string[] = []
  DIRECTIONS.forEach(([x_step, y_step]) => {
    const visible = find_visible(x, y, x_step, y_step, waiting_area)
    if (visible) {
      result.push(visible)
    }
  })
  return result
}

const find_visible = (x:number, y:number, x_step:number, y_step:number, waiting_area:string[][]):(string|undefined) => {
  const neighbor_x = x + x_step
  const neighbor_y = y + y_step
  const neighbor_row = neighbor_y >=0 ? waiting_area[neighbor_y] : undefined
  if (!neighbor_row) {
    return undefined
  }
  const neighbor = neighbor_x >= 0 ? neighbor_row[neighbor_x]: undefined
  //console.log({x,y,x_step,y_step, neighbor})
  if (!neighbor) {
    return undefined
  }
  if (neighbor === FLOOR) {
    return find_visible(neighbor_x, neighbor_y, x_step, y_step, waiting_area)
  }
  return neighbor
}

let neighbors = adjacents

let crowded = four_is_a_crowd


const EMPTY_SEAT = 'L'
const OCCUPIED_SEAT = '#'
const FLOOR = '.'
