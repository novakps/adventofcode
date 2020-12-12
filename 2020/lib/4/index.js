"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const REQUIRED_FIELDS = ['byr', 'iyr', 'eyr', 'hcl', 'hgt', 'ecl', 'pid'];
const parse = (inputFileName) => {
    const data = fs_1.readFileSync(inputFileName).toString();
    const passports = data.split(/\n\n/).map((passport) => {
        const raw_fields = passport.split(/\s/);
        return raw_fields.reduce((accumulator, field) => {
            const [key, value] = field.split(':');
            accumulator[key] = value;
            return accumulator;
        }, {});
    });
    const requiredFieldPassports = passports.filter((passport) => {
        return REQUIRED_FIELDS.every((field_name => {
            return passport[field_name];
        }));
    });
    console.log('Part1 ', requiredFieldPassports.length);
    const validPassports = requiredFieldPassports.filter((passport) => {
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
const RE_FOUR_DIGITS = /^\d{4}$/;
const RE_HEIGHT = /^(\d+)(cm|in)$/;
const RE_HAIR_COLOR = /^#[0-9,a-f]{6}$/;
const RE_EYE_COLOR = /^(amb|blu|brn|gry|grn|hzl|oth)$/;
const RE_PASSPORT_ID = /^\d{9}$/;
const isValidPassport = (passport) => {
    //console.log(passport)
    const { byr, iyr, eyr, hcl, hgt, ecl, pid } = passport;
    //console.log({pid})
    if (validateYear(byr, 1920, 2002) === false) {
        console.log('failed', { byr });
        return false;
    }
    if (validateYear(iyr, 2010, 2020) === false) {
        console.log('failed', { iyr });
        return false;
    }
    if (validateYear(eyr, 2020, 2030) === false) {
        console.log('failed', { eyr });
        return false;
    }
    if (validateHgt(hgt) === false) {
        console.log('failed', { hgt });
        return false;
    }
    if (RE_HAIR_COLOR.test(hcl) === false) {
        console.log('failed', { hcl });
        return false;
    }
    if (RE_EYE_COLOR.test(ecl) === false) {
        console.log('failed', { ecl });
        return false;
    }
    if (RE_PASSPORT_ID.test(pid) == false) {
        console.log('failed', { pid });
        return false;
    }
    return true;
};
const validateYear = (text, min, max) => {
    //console.log({text, min, max})
    if (RE_FOUR_DIGITS.test(text) === false) {
        return false;
    }
    const value = parseInt(text, 10);
    return (value >= min && value <= max);
};
const validateHgt = (hgt) => {
    const match = hgt.match(RE_HEIGHT);
    if (!match) {
        return false;
    }
    const [, height, units] = match;
    const value = parseInt(height, 10);
    if (units === 'cm') {
        return (value >= 150 && value <= 193);
    }
    if (units === 'in') {
        return (value >= 59 && value <= 76);
    }
    return false;
};
exports.default = parse;
