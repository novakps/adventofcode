import { readFileSync } from 'fs'

const isInvalid = (str_id: string, reps: number) => {
    //console.log({ str_id, reps }, str_id.length)
    if (str_id.length % reps) {
        return false
    }
    const chunks = chunkString(str_id, str_id.length / reps)
    //console.log({ str_id, reps, chunks })
    return chunks.reduce((acc, val) => acc && (val === chunks[0]), true)
}

const chunkString = (str: string, length: number) => {
    return str.match(new RegExp('.{1,' + length + '}', 'g')) || []
}


export default (inputFileName: string) => {
    const data = readFileSync(inputFileName).toString().trim()
    const ranges = data.split(/,/)
    //console.log(ranges)
    var invalid_id_sum1 = 0
    var invalid_id_sum2 = 0
    ranges.forEach((range) => {
        const ids = range.split(/-/).map((id) => parseInt(id, 10)).sort((a, b) => a - b)
        const [first_id, last_id] = ids
        //console.log({ first_id, last_id })
        var id = first_id
        do {
            var str_id = id.toString()
            //console.log({ str_id })
            var reps = 2
            do {
                if (isInvalid(str_id, reps)) {
                    if (reps === 2) {
                        invalid_id_sum1 += id
                        //   console.log({ str_id })
                    }
                    invalid_id_sum2 += id
                    // console.log({ str_id })
                    break
                }
                reps++
            } while (reps <= str_id.length)
            id++
        } while (id <= last_id)
    })
    console.log({ invalid_id_sum1 })
    console.log({ invalid_id_sum2 })
}
