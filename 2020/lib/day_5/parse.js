"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var parse = function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    var passes = data.split(/\r?\n/).filter(function (line) { return line; });
    var highest_seat_id = 0;
    var seats = passes.map(function (pass) {
        var row = pass.slice(0, 7).replace(/F/g, '0').replace(/B/g, '1');
        var column = pass.slice(7).replace(/L/g, '0').replace(/R/g, '1');
        var seat_id = parseInt(row + column, 2);
        if (seat_id > highest_seat_id) {
            highest_seat_id = seat_id;
        }
        return { pass: pass, row: row, column: column, seat_id: seat_id };
    });
    //console.log(seats)
    console.log("Part 1 highest seat ID: " + highest_seat_id);
    var sorted_seat_ids = seats.map(function (seat) { return seat.seat_id; }).sort(function (a, b) { return a - b; });
    var my_seat_id = sorted_seat_ids.find(function (seat_id, index, seats) {
        if (index && seats[index - 1] !== seat_id - 1) {
            console.log("Part 2 my seat ID: " + (seat_id - 1));
            return true;
        }
        if (seats[index + 1] !== seat_id + 1) {
            console.log("Part 2 my seat ID: " + (seat_id + 1));
            return true;
        }
    });
};
exports.default = parse;
