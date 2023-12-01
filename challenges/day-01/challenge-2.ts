import * as fs from 'fs';

const digits: Record<string, number> = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};
const input = fs.readFileSync(__dirname + '/test-input-2.txt', {
  encoding: 'utf8',
});
let sum = 0;
input
  .split('\n')
  .filter((line) => line.length > 0)
  .map((line) => line.split(''))
  .forEach((line) => {
    let numStrs = Object.keys(digits);
    let firstDigit = line.find((char) => numStrs.includes(char));
    let lastDigit = line.findLast((char) => numStrs.includes(char));
    if (firstDigit === undefined) firstDigit = '0';
    if (lastDigit === undefined) lastDigit = '0';
    console.log(firstDigit, lastDigit);
    sum += Number(`${digits[firstDigit]}${digits[lastDigit]}`);
  });
console.log(sum);
