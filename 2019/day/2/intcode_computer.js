var stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks.push(chunk);
});

const [ADD, MULTIPLY, STOP] = [1, 2, 99]
const TARGET_OUTPUT = 19690720

stdin.on('end', function () {
  const text = inputChunks.join()
  const part1Result = calc(text, 12, 2 )
  stdout.write('\n');
  stdout.write(`result: ${part1Result}\n`)
  let done = false
  for (var noun = 0; noun<=99; noun++ ) {
    for (var verb = 0; verb <= 99; verb++) {
      const output = calc(text, noun, verb)
      if (output === TARGET_OUTPUT) {
        done = true
        console.log(`resultPart2: ${100 * noun + verb}`)
        break
      }
    }
    if (done) {
      break
    }
  }

});

const calc = (text, noun, verb) => {
  const intcodes = text.split(',').map(value => parseInt(value, 10))
  intcodes[1] = noun
  intcodes[2] = verb

  for (var i = 0; i < intcodes.length; i+=4) {
    const opCode = intcodes[i]
    const operand1Ref = intcodes[i + 1]
    const operand2Ref = intcodes[i + 2]
    const outputRef = intcodes[i + 3]

    if (opCode === ADD) {
      intcodes[outputRef] = intcodes[operand1Ref] + intcodes[operand2Ref]
      continue
    }
    if (opCode === MULTIPLY) {
      intcodes[outputRef] = intcodes[operand1Ref] * intcodes[operand2Ref]
      continue
    }
    if (opCode === STOP) {
      //console.log('STOP')
    } else {
      console.log(`invalid opCode: ${opCode}`)
    }
    break
  }
  console.log(intcodes.join(','))
  return intcodes[0]
}
