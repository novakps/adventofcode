import fileinput

location = [0, 0]
seen = {}

def distance_from_origin():
    return sum([abs(coord) for coord in location])

def been_there_done_that():
    coords = ','.join([str(i) for i in location])
    if coords in seen:
        print('been there done that ' +  str(distance_from_origin()))
    seen[coords] = True

def N(blocks):
    global location
    for b in range(blocks):
        location[1]+=1
        been_there_done_that()

def E(blocks):
    global location
    for b in range(blocks):
        location[0]+=1
        been_there_done_that()

def S(blocks):
    global location
    for b in range(blocks):
        location[1]-=1
        been_there_done_that()

def W(blocks):
    global location
    for b in range(blocks):
        location[0]-=1
        been_there_done_that()

go = [N, E, S, W]

heading = 0;

def R():
    global heading
    heading+=1

def L():
    global heading
    heading-=1

turn = {'R': R, 'L': L}

def main():
    for line in fileinput.input():
        global location
        location = [0, 0]
        print(distance(line))

def distance(line):
    moves = [move.strip() for move in line.split(',')]
    for move in moves:
        turn[move[:1]]()
        go[heading % 4](int(move[1:]))
    return distance_from_origin()


if __name__ == '__main__':
    main()
