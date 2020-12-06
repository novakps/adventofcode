# Advent of Code 2020

## Running

### First, install dependencies (of course)
```
npm install
```

### Execute code for a particular day and an input file
```
npx ts-node src/index.ts --day 1 data/1/test.txt
//two entries: 514579
//three entries: 241861950
```

### Compile TypeScript and execute compiled code
```
npm run build
./lib/index.js --day 5 data/5/test.txt
```

### Watch and re-rerun on code change (edit build:live script in package.json)
```
npm start

> 01@0.0.0 start /Volumes/git/adventofcode/2020
> npm run build:live


> 01@0.0.0 build:live /Volumes/git/adventofcode/2020
> nodemon --watch 'src/**/*.ts' --exec "ts-node" src/index.ts --day 2 data/2/test.txt

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*.ts
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts --day 2 data/2/test.txt`
Part one valid count: 2
Part two valid count: 1
[nodemon] clean exit - waiting for changes before restart
```

