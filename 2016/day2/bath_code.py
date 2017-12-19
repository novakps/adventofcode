import fileinput

coord_keys = {
    (-1, 1): 1,
    (0, 1): 2,
    (1, 1): 3,
    (-1, 0): 4,
    (0, 0): 5,
    (1, 0): 6,
    (-1, -1): 7,
    (0, -1): 8,
    (1, -1): 9
}

def R(coords):
    result = coords
    if coords[0] < 1:
        result = (coords[0] + 1, coords[1])
    return result

def L(coords):
    if coords[0] > -1:
        coords(0) -= 1
    return coords

def U(coords):
    if coords[0] > -1:
        coords(1) -= 1
    return coords

def D(coords):
    if coords[1] < 1:
        coords(1) += 1
    return coords

move = {'R': R, 'L': L, 'U': U, 'D': D}

def get_key(line):
    coords = (0, 0)
    for code in line.strip():
        coords = move[code](coords)
    print coords

def main(lines):

    for line in lines:
        print(coord_keys[get_key(line)])

if __name__ == '__main__':
    main(fileinput.input())
