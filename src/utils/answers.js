export function checkAnswer(correctNumbers = [], userAnswer = "") {
  const userNumbers = userAnswer.split(" ").map((stringNumber) => Number.parseInt(stringNumber));
  return correctNumbers.every((number) => userNumbers.includes(number));
}
