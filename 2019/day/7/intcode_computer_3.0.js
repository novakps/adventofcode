const _ = require('lodash')
const stdin = process.stdin,
    stdout = process.stdout,
    inputChunks = [];

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  inputChunks.push(chunk);
});

const [ADD, MULTIPLY, INPUT, OUTPUT, JUMP_IF_TRUE, JUMP_IF_FALSE, LESS_THAN, EQUALS, STOP] = [1, 2, 3, 4, 5, 6, 7, 8, 99]
const [POSITION_MODE, IMMEDIATE_MODE] = ['0', '1']
const TARGET_OUTPUT = 19690720
const AC = 1
const THERMAL_RADIATOR = 5

stdin.on('end', function () {
  const text = inputChunks.join()
  execute(text, THERMAL_RADIATOR)

});

const getOperand = (operandRef, paramMode, codes) => {
  if (paramMode !== IMMEDIATE_MODE) {
    return parseInt(codes[operandRef], 10)
  }
  return parseInt(operandRef, 10)
}

const add = ({pointer, codes, operand1, operand2, outputRef}) => {
  console.log(`ADD ${operand1} + ${operand2} setting outputRef ${outputRef} to ${operand1 + operand2}`)
  codes[outputRef] = (operand1 + operand2).toString()
  return pointer + 4
}

const multiply =  ({pointer, codes, operand1, operand2, outputRef}) => {
  console.log(`MULTIPLY ${operand1} * ${operand2} setting outputRef ${outputRef} to ${operand1 * operand2}`)
  codes[outputRef] = (operand1 * operand2).toString()
  return pointer + 4
}

let inputCounter = 0

const input = ({pointer, codes, ref, systemId}) => {
  codes[ref] = systemId.toString()
  console.log(`INPUT setting ref: ${ref} to ${systemId}`)
  inputCounter+=1
  if (inputCounter > 1) {
    console.log(`warning: multiples inputs: #{inputCounter}`)
  }
  return pointer + 2
}

const output = ({pointer, codes, value}) => {
  console.log(`OUTPUT ${value}`)
  return pointer + 2
}

const jumpIfTrue = ({ pointer, codes, operand1, operand2}) => {
  console.log(`jump if true`)
  if (operand1 !== 0 ) {
    return operand2
  }
  return pointer + 3
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
  //console.log(`pointer: ${pointer} opCode: ${opCode} operation: ${operation} paramMode1: ${paramMode1} paramMode2: ${paramMode2} paramMode3: ${paramMode3} operand1Ref: ${operand1Ref} operand2Ref: ${operand2Ref} outputRef: ${outputRef} `)
  return {opCode, operation, paramMode1, paramMode2, paramMode3, operand1Ref, operand2Ref, outputRef}
}

const execute = (text, systemId) => {
  const codes = text.split(',')


  let i = 0

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
      const systemId = THERMAL_RADIATOR
      i = input({pointer, codes, ref, systemId})
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
      let operand1
      let operand2
      if (paramMode1 !== IMMEDIATE_MODE) {
        operand1 = parseInt(codes[operand1Ref], 10)
      } else {
        operand1 = parseInt(operand1Ref, 10)
      }
      if (paramMode2 !== IMMEDIATE_MODE) {
        operand2 = parseInt(codes[operand2Ref], 10)
      } else {
        operand2 = parseInt(operand2Ref, 10)
      }
      if (operand1 === 0) {
        i = operand2
      } else {
        i+=3
      }
      console.log(`JUMP_IF_FALSE operand1: ${operand1} set i ${i}`)
      continue
    }
    if (operation === LESS_THAN) {
      let operand1
      let operand2
      if (paramMode1 !== IMMEDIATE_MODE) {
        operand1 = parseInt(codes[operand1Ref], 10)
      } else {
        operand1 = parseInt(operand1Ref, 10)
      }

      if (paramMode2 !== IMMEDIATE_MODE) {
        operand2 = parseInt(codes[operand2Ref], 10)
      } else {
        operand2 = parseInt(operand2Ref, 10)
      }
      let value
      if (operand1 < operand2) {
        value = 1
      } else {
        value = 0
      }
      codes[outputRef] = value
      console.log(`LESS_THAN ${operand1} < ${operand2} setting ${outputRef} to ${value}`)
      i+=4
      continue
    }
    if (operation === EQUALS) {
      let operand1
      let operand2
      if (paramMode1 !== IMMEDIATE_MODE) {
        operand1 = parseInt(codes[operand1Ref], 10)
      } else {
        operand1 = parseInt(operand1Ref, 10)
      }

      if (paramMode2 !== IMMEDIATE_MODE) {
        operand2 = parseInt(codes[operand2Ref], 10)
      } else {
        operand2 = parseInt(operand2Ref, 10)
      }
      let value
      if (operand1 === operand2) {
        value = 1
      } else {
        value = 0
      }
      codes[outputRef] = value
      console.log(`EQUALS ${operand1} === ${operand2} setting ${outputRef} to ${value}`)
      i+=4
      continue
    }
    if (operation === STOP) {
      console.log('STOP')
      return
    } else {
      console.log(`invalid operation: ${operation}`)
      return
    }
  }
}
