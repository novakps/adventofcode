"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (inputFileName) => {
    const data = (0, fs_1.readFileSync)(inputFileName).toString().trim();
    const ship_1 = { heading: 90, north: 0, east: 0 };
    navigate_1(ship_1, instructions(data));
    console.log('part 1: ', manhattan_distance(ship_1));
    const ship_2 = { heading: 90, north: 0, east: 0 };
    const waypoint = { north: 1, east: 10 };
    navigate_2(ship_2, waypoint, instructions(data));
    console.log('part 2: ', manhattan_distance(ship_2));
};
const instructions = (data) => {
    return data.split(/\n/).map((line) => {
        const match = line.match(/^([NSEWLRF])(\d+)/);
        if (match) {
            const action = match[1];
            const value = match[2];
            return [action, value];
        }
        return [];
    });
};
const BEARING = new Map();
BEARING.set('N', 0);
BEARING.set('E', 90);
BEARING.set('S', 180);
BEARING.set('W', 270);
const navigate_1 = (ship, instructions) => {
    instructions.forEach(([action, text_value]) => {
        const value = parseInt(text_value, 10);
        //console.log({action, value, ship})
        switch (action) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                const bearing = BEARING.get(action);
                //console.log({bearing, action})
                if (bearing !== undefined) {
                    move(ship, bearing, value);
                }
                break;
            case 'L':
                ship.heading = (ship.heading + 360 - value) % 360;
                break;
            case 'R':
                ship.heading = (ship.heading + value) % 360;
                break;
            case 'F':
                move(ship, ship.heading, value);
                break;
            default:
                throw `Invalid Action ${action}`;
        }
    });
    return ship;
};
const navigate_2 = (ship, waypoint, instructions) => {
    instructions.forEach(([action, text_value]) => {
        const value = parseInt(text_value, 10);
        console.log({ ship, waypoint, action, value });
        switch (action) {
            case 'N':
            case 'S':
            case 'E':
            case 'W':
                const bearing = BEARING.get(action);
                //console.log({bearing, action})
                if (bearing !== undefined) {
                    move(waypoint, bearing, value);
                }
                break;
            case 'L':
                rotate(waypoint, (360 - value) % 360);
                break;
            case 'R':
                rotate(waypoint, value);
                break;
            case 'F':
                move(ship, 90, waypoint.east * value);
                move(ship, 0, waypoint.north * value);
                break;
            default:
                throw `Invalid Action ${action}`;
        }
    });
    return ship;
};
const rotate = (point, degrees) => {
    const { east, north } = point;
    console.log('rotate', { point, degrees });
    switch (degrees) {
        case 0:
            break;
        case 90:
            point.east = north;
            point.north = -east;
            break;
        case 180:
            point.north = -north;
            point.east = -east;
            break;
        case 270:
            point.east = -north;
            point.north = east;
            break;
        default:
            throw `Invalid degrees ${degrees}`;
    }
    //console.log('rotated', degrees, point)
};
const move = (point, direction, distance) => {
    //console.log('move', {direction, distance})
    switch (direction) {
        case 0:
            point.north = point.north + distance;
            break;
        case 90:
            point.east = point.east + distance;
            break;
        case 180:
            point.north = point.north - distance;
            break;
        case 270:
            point.east = point.east - distance;
            break;
        default:
            throw `Invalid Direction ${direction}`;
    }
};
const manhattan_distance = (point) => {
    return Math.abs(point.north) + Math.abs(point.east);
};
