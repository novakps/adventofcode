import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()
  const [earliest_departure, bus_ids] = parse(data)

  console.log('part 1 ', next_bus(
    earliest_departure,
    bus_ids.filter(bus => !isNaN(bus))))
  console.log('part 2: ', find_t(bus_ids))
}

const parse = (data:string):[number,number[]] => {
  const [earliest_departure, buses] = data.split(/\n/)
  return [parseInt(earliest_departure, 10) , buses.split(',').map((bus) => parseInt(bus, 10))]
}

const next_bus = (earliest_departure:number, bus_ids:number[]) => {
  let departure = earliest_departure
  let bus

  while (true) {
    bus_ids.forEach((bus_id) => {
      if ((departure % bus_id) === 0) {
        bus = bus_id
      }
    })
    if (bus) {
      break
    }
    departure++
  }
  return (departure - earliest_departure) * bus
}

// seive that take a long time...
const find_t = (bus_ids:number[]) => {
  const offsets:number[][] = []
  bus_ids.map((bus_id, index) => {
    if (!isNaN(bus_id)) {
      offsets.push([bus_id, index])
    }
  })
  offsets.sort((a,b) => b[0] - a[0] )
  const max_bus = offsets[0]
  const max_bus_id = max_bus[0]
  const max_bus_id_offset = max_bus[1]
  offsets.shift()
  // console.log({offsets, max_bus_id, max_bus_id_offset})
  let t = -max_bus_id_offset

  while (!test(t, offsets)) {
    t+=max_bus_id
  }
  return t
}


const test = (t:number, offsets: number[][]) => {
  return offsets.every(([bus_id, offset]) => {
    return (((t + offset) % bus_id) === 0)
  })
}
