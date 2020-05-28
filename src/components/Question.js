import React from "react";
import Countdown360 from "react-countdown360";

const Question = ({numbers, delay, handleQuestionComplete}) => {
  return <>
      <Countdown360
        seconds={delay}
        onComplete={handleQuestionComplete}
      />
      <div data-testid="question-numbers">
        {numbers.join(" ")}
      </div>
    </>;
};

export default Question;
