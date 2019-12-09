const _ = require('lodash')
const stdin = process.stdin,
      stdout = process.stdout,
      inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks.push(chunk);
});

const WIDTH = 25
const HEIGHT = 6
const LAYER_SIZE = WIDTH * HEIGHT
const [BLACK, WHITE, TRANSPARENT] = [0, 1, 2]

const merge = (layers, height, width) => {
  const layerSize = height * width
  let image = TRANSPARENT.toString().repeat(layerSize).split('')

  _.each(layers, (layer, idx) => {
    //console.log('layer', layer)
    image = _.map(image, (value, idx) => {
      if (value === TRANSPARENT.toString()) {
        return layer[idx]
      }
      return value
    })
  })
  const lines = _.chunk(image, width)
  const result = _.map(lines, line => line.join('')).join('\n')
  return result
}

const test = () =>{
  const test1 = '0222112222120000'
  const layers = _.chunk(test1, 4)

  const test1Result = merge(layers, 2, 2)
  console.log(`test1Result\n${test1Result}`)
}

test()

stdin.on('end', function () {
  const text = inputChunks.join()
  const layers = _.chunk(text, LAYER_SIZE)
  const counts = _.map(layers, layer => _.countBy(layer))
  const fewestZeroesLayer = _.minBy(counts, '0')
  const part1Result = _.get(fewestZeroesLayer, '1', 0) * _.get(fewestZeroesLayer, '2', 0)
  console.log(`part1 ${part1Result}`)
  const image = merge(layers, HEIGHT, WIDTH).replace(/0/g, '_').replace(/1/g, 'X')
  const part2Result = image.replace(/2/g, '_')
  console.log(`part2:\n${part2Result}`)
})
