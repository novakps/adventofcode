import { readFileSync } from 'fs'

export default (inputFileName: string) => {
    const data = readFileSync(inputFileName).toString()
    const lines = data.split(/\r?\n/)
    const rotations = lines.map((line) => {
        const direction = line.slice(0, 1)
        const clicks = parseInt(line.slice(1), 10)
        if (direction.length < 1) {
            return null
        }
        if (direction === 'L') {
            return clicks * -1
        }
        return clicks
    }).filter((i) => i)
    var dial = 50
    var part1_counter = 0
    var part2_counter = 0
    const dial_points = rotations.map((rotation) => {
        //console.log({ rotation })
        if (rotation === null) {
            return
        }
        if (rotation === 0) {
            return
        }
        const increment = rotation < 0 ? -1 : 1;
        do {
            rotation -= increment
            dial += increment
            dial = ((dial % 100) + 100) % 100;
            //console.log({ dial })
            if (dial === 0) {
                part2_counter++
            }
        } while (rotation !== 0)

        console.assert(dial >= 0, `Negative dial ${dial}`)
        console.assert(dial < 100, 'Overflow dial ${dial}')
        if (dial === 0) {
            part1_counter++
        }
        return dial
    })

    console.log({ part1_counter, part2_counter })
}
