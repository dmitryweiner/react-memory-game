import React from "react";
import renderer from "react-test-renderer";
import Question from "../../components/Question";
import { render, getNodeText } from "@testing-library/react";

test("Question calls proper handler when time is over", async () => {
  const props = {
    numbers: [1, 2, 3],
    delay: 1,
    handleQuestionComplete: jest.fn()
  };
  const callback = props.handleQuestionComplete;

  const { getByTestId } = render(<Question {...props} />);
  const numbersElement = getByTestId("question-numbers");
  expect(numbersElement).toBeInTheDocument();
  expect(getNodeText(numbersElement)).toBe(props.numbers.join(" "));

  expect(callback).not.toBeCalled();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});

test("Question", () => {
  const props = {
    numbers: [1, 2, 3],
    delay: 10,
    handleQuestionComplete: jest.fn()
  };
  const component = renderer.create(<Question {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
