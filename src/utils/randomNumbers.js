export function createRandomNumbers(count, magnitude) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(createRandomNumber(magnitude, result));
  }
  return result;
}

function createRandomNumber(magnitude, alreadyExistingNumbers = []) {
  let number;
  do {
    number = Math.floor(Math.random() * Math.pow(10, magnitude) + 1);
  } while (alreadyExistingNumbers.includes(number));
  return number;
}
