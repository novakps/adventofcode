"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hcl', 'hgt', 'ecl', 'pid'];
var parse = function (inputFileName) {
    var data = fs_1.readFileSync(inputFileName).toString();
    var passports = data.split(/\n\n/).map(function (passport) {
        var raw_fields = passport.split(/\s/);
        return raw_fields.reduce(function (accumulator, field) {
            var _a = field.split(':'), key = _a[0], value = _a[1];
            accumulator[key] = value;
            return accumulator;
        }, {});
    });
    var requiredFieldPassports = passports.filter(function (passport) {
        return REQUIRED_FIELDS.every((function (field_name) {
            return passport[field_name];
        }));
    });
    console.log('Part1 ', requiredFieldPassports.length);
    var validPassports = requiredFieldPassports.filter(function (passport) {
        return isValidPassport(passport);
    });
    console.log('Part2 ', validPassports.length);
};
//   byr (Birth Year) - four digits; at least 1920 and at most 2002.
//   iyr (Issue Year) - four digits; at least 2010 and at most 2020.
//   eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
//   hgt (Height) - a number followed by either cm or in:
//     If cm, the number must be at least 150 and at most 193.
//     If in, the number must be at least 59 and at most 76.
//   hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
//   ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
//   pid (Passport ID) - a nine-digit number, including leading zeroes.
//   cid (Country ID) - ignored, missing or not.
var RE_FOUR_DIGITS = /^\d{4}$/;
var RE_HEIGHT = /^(\d+)(cm|in)$/;
var RE_HAIR_COLOR = /^#[0-9,a-f]{6}$/;
var RE_EYE_COLOR = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
var RE_PASSPORT_ID = /^\d{9}$/;
var isValidPassport = function (passport) {
    //console.log(passport)
    var byr = passport.byr, iyr = passport.iyr, eyr = passport.eyr, hcl = passport.hcl, hgt = passport.hgt, ecl = passport.ecl, pid = passport.pid;
    //console.log({pid})
    if (validateYear(byr, 1920, 2002) === false) {
        console.log('failed', { byr: byr });
        return false;
    }
    if (validateYear(iyr, 2010, 2020) === false) {
        console.log('failed', { iyr: iyr });
        return false;
    }
    if (validateYear(eyr, 2020, 2030) === false) {
        console.log('failed', { eyr: eyr });
        return false;
    }
    if (validateHgt(hgt) === false) {
        console.log('failed', { hgt: hgt });
        return false;
    }
    if (RE_HAIR_COLOR.test(hcl) === false) {
        console.log('failed', { hcl: hcl });
        return false;
    }
    if (RE_EYE_COLOR.test(ecl) === false) {
        console.log('failed', { ecl: ecl });
        return false;
    }
    if (RE_PASSPORT_ID.test(pid) == false) {
        console.log('failed', { pid: pid });
        return false;
    }
    return true;
};
var validateYear = function (text, min, max) {
    //console.log({text, min, max})
    if (RE_FOUR_DIGITS.test(text) === false) {
        return false;
    }
    var value = parseInt(text, 10);
    return (value >= min && value <= max);
};
var validateHgt = function (hgt) {
    var match = hgt.match(RE_HEIGHT);
    if (!match) {
        return false;
    }
    var height = match[1], units = match[2];
    var value = parseInt(height, 10);
    if (units === 'cm') {
        return (value >= 150 && value <= 193);
    }
    if (units === 'in') {
        return (value >= 59 && value <= 76);
    }
    return false;
};
exports.default = parse;
