import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()
  const ship:Ship = {heading: 90, north: 0, east: 0}
  navigate(ship, instructions(data))
  //console.log({ship})
  console.log('part 1: ', manhattan_distance(ship))


}

const instructions = (data:string):string[][] => {
  return data.split(/\n/).map((line) => {
    const match = line.match(/^([NSEWLRF])(\d+)/)
    if (match) {
      const action = match[1]
      const value = match[2]
      return [action, value]
    }
    return[]
  })
}

type Ship = {
  heading: number
  north: number
  east: number
}

type Waypoint = {
  north: number
  east: number
}

type Direction = 'N'|'E'|'S'|'W'

const BEARING:Map<Direction, number> = new Map()
BEARING.set('N', 0)
BEARING.set('E', 90)
BEARING.set('S', 180)
BEARING.set('W', 270)

const navigate = (ship:Ship, instructions:string[][]) => {
  instructions.forEach(([action, text_value]) => {
    const value = parseInt(text_value, 10)
    //console.log({action, value, ship})
    switch (action) {
    case 'N':
    case 'S':
    case 'E':
    case 'W':
      const bearing = BEARING.get(action)
      //console.log({bearing, action})
      if (bearing !== undefined) {
        move(ship, bearing, value)
      }
      break
    case 'L':
      ship.heading = (ship.heading + 360 - value) % 360
      break
    case 'R':
      ship.heading = (ship.heading + value) % 360
      break
    case 'F':
      move(ship, ship.heading, value)
      break
    default:
      throw `Invalid Action ${action}`
    }
  })

  return ship
}

const move = (ship:Ship, direction:number, distance:number) => {
  //console.log('move', {direction, distance})
  switch (direction) {
  case 0:
    ship.north = ship.north + distance
    break
  case 90:
    ship.east = ship.east + distance
    break
  case 180:
    ship.north = ship.north - distance
    break
  case 270:
    ship.east = ship.east - distance
    break
  default:
    throw `Invalid Direction ${direction}`
  }
}

const manhattan_distance = (ship:Ship):number => {
  return Math.abs(ship.north) + Math.abs(ship.east)
}
