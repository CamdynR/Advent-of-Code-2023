import * as fs from 'fs';

const digits = '0123456789';
const input = fs.readFileSync(__dirname + '/input.txt', {
  encoding: 'utf8',
});
let sum = 0;
input
  .split('\n')
  .filter((line) => line.length > 0)
  .map((line) => line.split(''))
  .forEach((line) => {
    let firstDigit = line.find((char) => digits.includes(char));
    let lastDigit = line.findLast((char) => digits.includes(char));
    sum += Number(`${firstDigit}${lastDigit}`);
  });
console.log(sum);
