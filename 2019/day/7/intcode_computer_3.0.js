const assert = require('assert');
const _ = require('lodash')
const stdin = process.stdin,
      stdout = process.stdout,
      inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks.push(chunk);
});

const DEBUG = 1
const [ADD, MULTIPLY, INPUT, OUTPUT, JUMP_IF_TRUE, JUMP_IF_FALSE, LESS_THAN, EQUALS, STOP] = [1, 2, 3, 4, 5, 6, 7, 8, 99]
const [POSITION_MODE, IMMEDIATE_MODE] = ['0', '1']
const TARGET_OUTPUT = 19690720
const AC = 1
const THERMAL_RADIATOR = 5
const AMPS = [0,1,2,3,4]

const TEST1 = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0'
const TEST2 = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0'
const TEST3 = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0'
const TEST7B1 = '3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5'

stdin.on('end', function () {
  console.log('testing...')

  // assert.equal(amplify(TEST1, [4,3,2,1,0]), 43210)
  // assert.equal(largestOutput(TEST2, AMPS), 54321)
  // assert.equal(largestOutput(TEST3, AMPS), 65210)


  const text = inputChunks.join()
  // const ac = execute(text, [AC])
  // console.log(`test ac: ${ac}`)
  // const thermalRadiator = execute(text,[THERMAL_RADIATOR])
  // console.log(`test thermal radiator ${thermalRadiator}`)
  //const part1Result = largestOutput(text, AMPS)
  //assert.equal(part1Result, 422858)
  //console.log(`part1Result: ${part1Result}`)

  assert.equal(execute(TEST7B1.split(','), [9,8,7,6,5]), 139629729)
  const test7b1 = largestOutput(TEST7B1, [5,6,7,8,9])
  console.log(`test7b1 ${test7b1}`)
});

const getOperand = (operandRef, paramMode, codes) => {

  let result
  if (paramMode === POSITION_MODE) {
    console.log('position mode')
    result = parseInt(codes[operandRef], 10)
  } else {
    console.log('immediate mode')
    result = parseInt(operandRef, 10)
  }
  if (DEBUG) console.log(`getOperand operandRef: ${operandRef} paramMode: ${paramMode} result: ${result}`)
  return result
}

const add = ({pointer, codes, operand1, operand2, outputRef}) => {
  if (DEBUG) console.log(`ADD ${operand1} + ${operand2} setting outputRef ${outputRef} to ${operand1 + operand2}`)
  codes[outputRef] = (operand1 + operand2).toString()
  return pointer + 4
}

const multiply =  ({pointer, codes, operand1, operand2, outputRef}) => {
  if (DEBUG) console.log(`MULTIPLY ${operand1} * ${operand2} setting outputRef ${outputRef} to ${operand1 * operand2}`)
  codes[outputRef] = (operand1 * operand2).toString()
  return pointer + 4
}

const input = ({pointer, codes, operand1Ref, value}) => {
  if (DEBUG) console.log(`INPUT setting ref: ${operand1Ref} to ${value}`)
  codes[operand1Ref] = value.toString()
  return pointer + 2
}

const output = ({pointer, codes, value}) => {
  if (DEBUG) console.log(`OUTPUT ${value}`)
  return pointer + 2
}

const jumpIfTrue = ({ pointer, codes, operand1, operand2}) => {
  if (DEBUG) console.log(`JUMP_IF_TRUE operand1: ${operand1} operand2: ${operand2}` )
  if (operand1 !== 0 ) {
    return operand2
  }
  return pointer + 3
}

const jumpIfFalse = ({ pointer, codes, operand1, operand2}) => {
  if (DEBUG) console.log('JUMP_IF_FALSE')
  if (operand1 === 0) {
    return operand2
  } else {
    return pointer + 3
  }
}

const lessThan = ( { pointer, codes, operand1, operand2, outputRef }) => {
  let value
  if (operand1 < operand2) {
    value = 1
  } else {
    value = 0
  }
  codes[outputRef] = value
  if (DEBUG) console.log(`LESS_THAN ${operand1} < ${operand2} setting ${outputRef} to ${value}`)
  return pointer + 4
}

const equals = ( { pointer, codes, operand1, operand2, outputRef }) => {
  let value
  if (operand1 === operand2 ) {
    value = 1
  } else {
    value = 0
  }
  codes[outputRef] = value
  if (DEBUG) console.log(`EQUALS ${operand1} === ${operand2} setting ${outputRef} to ${value}`)
  return pointer + 4
}
const parseCommand = (pointer, codes) => {
  if (DEBUG) console.log(_.reduce(codes, (result, value, idx) => {result[idx] = value; return result;},{}))
  const opCode = codes[pointer]
  const operation = parseInt(opCode.slice(-2), 10)
  const paramMode1 = opCode.slice(-3, -2) || '0'
  const paramMode2 = opCode.slice(-4, -3) || '0'
  const paramMode3 = opCode.slice(-5,-4) || '0'
  const operand1Ref = parseInt(codes[pointer + 1], 10)
  const operand2Ref = parseInt(codes[pointer + 2], 10)
  const outputRef = parseInt(codes[pointer + 3], 10)
  if (DEBUG) console.log(`pointer: ${pointer} opCode: ${opCode} operation: ${operation} paramMode1: ${paramMode1} paramMode2: ${paramMode2} paramMode3: ${paramMode3} operand1Ref: ${operand1Ref} operand2Ref: ${operand2Ref} outputRef: ${outputRef} `)
  return {opCode, operation, paramMode1, paramMode2, paramMode3, operand1Ref, operand2Ref, outputRef}
}

const permutations = function*(elements) {
  if (elements.length === 1) {
    yield elements;
  } else {
    let [first, ...rest] = elements;
    for (let perm of permutations(rest)) {
      for (let i = 0; i < elements.length; i++) {
        let start = perm.slice(0, i);
        let rest = perm.slice(i);
        yield [...start, first, ...rest];
      }
    }
  }
}

const execute = (codes, inputValues) => {
  let i = 0
  let inputPointer = 0

  while(i < codes.length) {
    const  {opCode, operation, paramMode1, paramMode2, paramMode3, operand1Ref, operand2Ref, outputRef} =
          parseCommand(i, codes)
    const pointer = i
    if (operation === ADD) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = add({pointer, codes, operand1, operand2, outputRef})
      continue
    }
    if (operation === MULTIPLY) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = multiply({pointer, codes, operand1, operand2, outputRef})
      continue
    }
    if (operation === INPUT) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      i = input({pointer, codes, operand1Ref, value: inputValues[inputPointer]})
      inputPointer++

      continue
    }
    if (operation === OUTPUT) {
      const value = getOperand(operand1Ref, paramMode1, codes)
      outputValue = value
      i = output({pointer, codes, value})
      break
    }
    if (operation === JUMP_IF_TRUE) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = jumpIfTrue({ pointer, codes, operand1, operand2 })
      continue
    }
    if (operation === JUMP_IF_FALSE) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = jumpIfFalse( { pointer, codes, operand1, operand2 })
      continue
    }
    if (operation === LESS_THAN) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = lessThan({pointer, codes, operand1, operand2, outputRef})
      continue
    }
    if (operation === EQUALS) {
      const operand1 = getOperand(operand1Ref, paramMode1, codes)
      const operand2 = getOperand(operand2Ref, paramMode2, codes)
      i = equals( { pointer, codes, operand1, operand2, outputRef})
      continue
    }
    if (operation === STOP) {
      if (DEBUG) console.log('STOP')
      break

    } else {
      console.log(`invalid operation: ${operation}`)
      return
    }
  }

  return outputValue
}

const largestOutput = (code, phases) => {
  const phaseSettings = permutations(phases)
  let max = -Infinity
  for (const phaseSetting of phaseSettings) {
    if (DEBUG) console.log(phaseSetting)
    const value = amplify(code, phaseSetting)
    max = max < value ? value : max
  }
  return max
}

const amplify = (text, phases) => {
  const codes = text.split(',')

  let value = 0
  let i = 0
  while (true) {
    const phase = phases[i%phases.length]
    value = execute(codes, [phase, value])
    if (DEBUG) console.log(value)
    i++
  }

  return value
}
