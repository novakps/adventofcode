import { readFileSync } from 'fs'

const parse = (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString()
  const passes = data.split(/\r?\n/).filter((line) => line)
  let highest_seat_id = 0
  const seats = passes.map((pass) => {
    const row = pass.slice(0,7).replace(/F/g, '0').replace(/B/g, '1')
    const column = pass.slice(7).replace(/L/g, '0').replace(/R/g, '1')
    const seat_id = parseInt(row + column, 2)
    if (seat_id > highest_seat_id) {
      highest_seat_id = seat_id
    }
    return {pass, row, column, seat_id}
  } )
  //console.log(seats)
  console.log(`Part 1 highest seat ID: ${highest_seat_id}`)

  const sorted_seat_ids = seats.map(seat => seat.seat_id).sort( (a,b) => a - b)
  const my_seat_id = sorted_seat_ids.find((seat_id, index, seats) => {

    if (index && seats[index - 1] !== seat_id - 1) {
      console.log(`Part 2 my seat ID: ${seat_id - 1}`)
      return true
    }
    if (seats[index + 1] !== seat_id + 1) {
      console.log(`Part 2 my seat ID: ${seat_id + 1}`)
      return true
    }
  })


}

export default parse
