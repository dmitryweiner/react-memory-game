import React from "react";
import Countdown360 from "react-countdown360";
import Paper from "@material-ui/core/Paper";

const Question = ({numbers, delay, handleQuestionComplete}) => {
  return <>
    <div style={{display: "flex", flexDirection: "row", padding: "10px"}}>
      <div>
        <Countdown360
          borderFillColor="#00ad00"
          seconds={delay}
          onComplete={handleQuestionComplete}
        />
      </div>
      <div style={{flexGrow: 1}}>
        <div
          data-testid="question-numbers"
          style={{display: "flex", flexDirection: "row", padding: "10px", fontSize: "60px", justifyContent: "space-around", flexWrap: "wrap"}}>
          {numbers.map((number, index) => (<Paper key={index} style={{padding: "10px", margin: "10px"}}>{number}</Paper>))}
        </div>
      </div>
    </div>
    </>;
};

export default Question;
