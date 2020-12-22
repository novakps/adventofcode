import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()

  console.log('part1: ', distribution(adaptors(data)))
  console.log('part2: ', allPaths(adaptors(data)))
}

const adaptors = (data:string) => data.split(/\n/).map((line) => parseInt(line, 10))

const distribution = (adaptors:number[]) => {
  const result:{[key:number]:number} = {1:1,3:1} // start 0 and end +3
  adaptors.sort((a,b) => a - b)
  for (var i = 1; i < adaptors.length; i++) {
    const step = adaptors[i] - adaptors[i - 1]
    result[step] = result[step] + 1
  }
  return result[1] * result[3]
}

const allPaths = (adaptors:number[]) => {
  const start = 0
  const device = Math.max(...adaptors) + 3
  adaptors.sort((a,b) => a - b)
  const nodes = new Set([start, ...adaptors, device])
  return path_count(start, device, nodes)
}

const STEPS = [1,2,3]

const neighbors = (position:number, nodes:Set<number>) => {
  const result = STEPS.map((step => {
    return position + step
  })).filter((node) => {
    return nodes.has(node)
  })
  return result
}

const PATH_COUNT_MEMO: Map<number,number> = new Map()

const path_count = (node: number, destination:number, nodes :Set<number>):number => {
  if (node === destination) {
    return 1
  }
  let result = PATH_COUNT_MEMO.get(node)
  if (result) {
    return result
  }
  result = neighbors(node, nodes).reduce((accumulator, neighbor) => {
    return accumulator + path_count(neighbor, destination, nodes)
  }, 0)
  PATH_COUNT_MEMO.set(node, result)
  return result
}
