import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString().trim()

  console.log('part1: ',part1(data))
  console.log('part2: ',part2(data))
}
const part1 = (data:string) => {
  const tree = rules_tree_1(data)
  console.log({tree})
  return find_roots(new Set(), tree, 'shiny gold bag')
}

const part2 = (data:string) => {
  const tree = rules_tree_2(data)
  console.log({tree})
  return find_paths(new Set(), tree, 'shiny gold bag')
}

const rules_tree_1 = (data: string) => {
  const cleaned = data.replace(/\bbags\b/g, 'bag')
  const rules = cleaned.split(/\n/g).map(line => line.split(/ contain /))
  const tree = new Map<string, any>()
  rules.map( rule => {
    const [container_type, contents] = rule
    //console.log({contents})
    const matches = [...contents.matchAll(/(\d+)\s([a-z ]+)/g)].forEach(match => {
      const count = match[1]
      const type = match[2]
      if (!tree.has(type)) {
        tree.set(type, {})
      }
      tree.get(type)[container_type] = count
    })
  })
  return tree
}

const rules_tree_2 = (data: string) => {
  const cleaned = data.replace(/\bbags\b/g, 'bag')
  const rules = cleaned.split(/\n/g).map(line => line.split(/ contain /))
  const tree = new Map<string, any>()
  rules.map( rule => {
    const [container_type, contents] = rule
    if (!tree.has(container_type)) {
      tree.set(container_type, {})
    }
    const matches = [...contents.matchAll(/(\d+)\s([a-z ]+)/g)].forEach(match => {
      const count = match[1]
      const type = match[2]
      tree.get(container_type)[type] = count
    })
  })
  return tree
}

const find_roots = (roots:Set<string>, tree:Map<string, any>, node:string) => {

  if (!node) {
    return
  }
  roots.add(node)
  const edges = tree.get(node)
  if (edges) {
    Object.keys(edges).forEach((edge) => {
      if (!roots.has(edge)) {
        find_roots(roots, tree, edge)
      }
    })
  }

  return roots.size - 1
}


const find_paths = (paths:Set<string>, tree:Map<string, any>, node:string): number => {
  if (!node) {
    return 1
  }
  paths.add(node)
  const edges = tree.get(node)

  return Object.entries(edges).reduce((accumulator, [key, value]) => {
    if (!paths.has(key)) {
      return accumulator + (value * find_paths(paths, tree, key))_
    }
    return 1
  }, 0)
}
