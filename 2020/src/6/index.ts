import { readFileSync } from 'fs'

export default (inputFileName:string) => {
  const data = readFileSync(inputFileName).toString()
  console.log(data)
}
