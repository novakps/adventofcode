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

const [ADD, MULTIPLY, INPUT, OUTPUT, JUMP_IF_TRUE, JUMP_IF_FALSE, LESS_THAN, EQUALS, RELATIVE_BASE_OFFSET, STOP] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99]
const [POSITION_MODE, IMMEDIATE_MODE, RELATIVE_MODE] = ['0', '1', '3']
const TARGET_OUTPUT = 19690720
const AC = 1
const THERMAL_RADIATOR = 5
const AMPS = [0,1,2,3,4]

const TEST1 = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0'
const TEST2 = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0'
const TEST3 = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0'
const TEST4 = '109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99'

const TEST5 = '1102,34915192,34915192,7,4,7,99,0'
const TEST6 = '104,1125899906842624,99'

stdin.on('end', function () {
  console.log('testing...')

  const test5Result = execute(TEST5, []).toString()
  assert.equal(test5Result.length, 16)

  const test6Result = execute(TEST6, [])
  assert.equal(test6Result, 1125899906842624)

  const text = inputChunks.join()
  const ac = execute(text, [AC])
  assert.equal(ac, 11933517)

  const thermalRadiator = execute(text,[THERMAL_RADIATOR])
  assert.equal(thermalRadiator, 10428568 )


  const test4Result = execute(TEST4, []).toString()
  console.log(test4Result)
  assert.equal(TEST4, test4Result)

});

let relativeBase
const getOperand = (operandRef, paramMode, codes) => {
  if (paramMode === POSITION_MODE) {
    return parseInt(codes[operandRef], 10)
  }
  if (paramMode === IMMEDIATE_MODE) {
    return parseInt(operandRef, 10)

  }
  return parseInt(codes[operandRef + relativeBase], 10)
}

const add = ({pointer, codes, operand1, operand2, outputRef}) => {
  console.log(`ADD ${operand1} + ${operand2} setting outputRef ${outputRef} to ${operand1 + operand2}`)
  if (_.isNaN(operand1) || _.isNaN(operand2)) {
    throw 'operand is Nan'
  }
  codes[outputRef] = (operand1 + operand2).toString()
  return pointer + 4
}

const multiply =  ({pointer, codes, operand1, operand2, outputRef}) => {
  if (_.isNaN(operand1) || _.isNaN(operand2)) {
    throw 'operand is Nan'
  }
  console.log(`MULTIPLY ${operand1} * ${operand2} setting outputRef ${outputRef} to ${operand1 * operand2}`)
  codes[outputRef] = (operand1 * operand2).toString()
  return pointer + 4
}

const input = ({pointer, codes, ref, value}) => {
  codes[ref] = value.toString()
  console.log(`INPUT setting ref: ${ref} to ${value}`)
  return pointer + 2
}

const output = ({pointer, codes, value}) => {
  outputValue = value
  console.log(`OUTPUT ${value}`)
  return pointer + 2
}

const setRelativeBase = ({pointer, codes, value}) => {
  relativeBase += value
  console.log(`RELATIVE_BASE_OFFSET: ${relativeBase}`)
  return pointer + 2
}

const jumpIfTrue = ({ pointer, codes, operand1, operand2}) => {
  console.log(`jump if true`)
  if (operand1 !== 0 ) {
    return operand2
  }
  return pointer + 3
}

const jumpIfFalse = ({ pointer, codes, operand1, operand2}) => {
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
  console.log(`LESS_THAN ${operand1} < ${operand2} setting ${outputRef} to ${value}`)
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
  console.log(`EQUALS ${operand1} === ${operand2} setting ${outputRef} to ${value}`)
  return pointer + 4
}

const parseCommand = (pointer, codes) => {
  const opCode = codes[pointer]
  const operation = parseInt(opCode.slice(-2), 10)
  const paramMode1 = opCode.slice(-3, -2) || '0'
  const paramMode2 = opCode.slice(-4, -3) || '0'
  const paramMode3 = opCode.slice(-5,-4) || '0'
  const operand1Ref = parseInt(codes[pointer + 1], 10)
  const operand2Ref = parseInt(codes[pointer + 2], 10)
  const outputRef = parseInt(codes[pointer + 3], 10)
  console.log(`pointer: ${pointer} opCode: ${opCode} operation: ${operation} paramMode1: ${paramMode1} paramMode2: ${paramMode2} paramMode3: ${paramMode3} operand1Ref: ${operand1Ref} operand2Ref: ${operand2Ref} outputRef: ${outputRef} `)
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

const execute = (text, inputValues) => {
  const codes = text.split(',')
  let i = 0
  let inputPointer = 0
  relativeBase = 0
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
      const ref = parseInt(codes[pointer + 1], 10)
      i = input({pointer, codes, ref, value: inputValues[inputPointer]})
      inputPointer++
      continue
    }
    if (operation === OUTPUT) {
      const value = getOperand(operand1Ref, paramMode1, codes)
      i = output({pointer, codes, value})
      continue
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
    if (operation === RELATIVE_BASE_OFFSET) {
      const value = getOperand(operand1Ref, paramMode1, codes)
      i = setRelativeBase({pointer, codes, value})
      continue
    }
    if (operation === STOP) {
      console.log('STOP')
      return outputValue
    } else {
      console.log(`invalid operation: ${operation}`)
      return
    }
  }
}

const largestOutput = (code, phases) => {
  const phaseSettings = permutations(phases)
  let max = -Infinity
  for (const phaseSetting of phaseSettings) {
    console.log(phaseSetting)
    const value = amplify(code, phaseSetting)
    max = max < value ? value : max
  }
  return max
}

const amplify = (code, phases) => {
  let value = 0
  _.forEach(phases, phase => {
    value = execute(code, [phase, value])
    //console.log(value)
  })
  return value
}
