import {checkAnswer} from "../../utils/answers";

describe('checkAnswer', () => {
  it.each`
    numbers         |  userAnswer       | result
    ${[1, 2, 3]}    |  ${'1 2 3'}       | ${true}
    ${[1, 2, 3]}    |  ${'3 2 1'}       | ${true}
    ${[5, 6, 7]}    |  ${'6 7 5'}       | ${true}
    ${[1, 2, 3]}    |  ${'5 6 6'}       | ${false}
    ${[1, 2, 3]}    |  ${'1 2'}         | ${false}
    ${[6, 7, 8]}    |  ${'8 7 9'}       | ${false}
  `('$numbers, $userAnswer, is $result',({numbers, userAnswer, result}) => {
    expect(checkAnswer(numbers, userAnswer)).toBe(result);
  });
});
