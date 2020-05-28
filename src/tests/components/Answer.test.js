import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from "react-test-renderer";
import Answer from "../../components/Answer";


test('Answer calls proper handler when pressing button', async () => {
  const props = {
    delay: 10,
    handleAnswerComplete: jest.fn(),
  };
  const callback = props.handleAnswerComplete;
  const userInput = "1 2 3";

  const { getByTestId } = render(<Answer {...props}/>);
  const buttonElement = getByTestId("answer-complete-button");
  const inputElement = getByTestId("answer-input");
  expect(buttonElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(callback).not.toBeCalled();

  fireEvent.change(
    inputElement.querySelector('input'),
    { target: { value: userInput } }
  );
  fireEvent.click(buttonElement);
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith(userInput);
});

test("Answer", () => {
  const props = {
    delay: 10,
    handleAnswerComplete: jest.fn(),
  };
  const component = renderer.create(<Answer {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
