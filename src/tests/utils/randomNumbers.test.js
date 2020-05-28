import {createRandomNumbers} from "../../utils/randomNumbers";

describe('createRandomNumbers', () => {
  it.each`
    count  | magnitude
    ${3}   | ${1}
    ${4}   | ${1}
    ${5}   | ${1}
    ${3}   | ${2}
    ${4}   | ${2}
    ${5}   | ${2}
    ${3}   | ${3}
    ${4}   | ${3}
    ${5}   | ${3}
  `('creates $count numbers with magnitude $magnitude',({count, magnitude}) => {
    const randomNumbers = createRandomNumbers(count, magnitude);

    expect(randomNumbers.length).toBe(count);
    for(let number of randomNumbers) {
      expect(number > 0).toBe(true);
      expect(number <=  Math.pow(10, magnitude)).toBe(true);
    }
  });
});
