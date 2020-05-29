import React, { useState } from "react";
import Countdown360 from "react-countdown360";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Check } from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "row",
      padding: "10px"
    },
    formWrapper: {
      display: "flex",
      flexDirection: "row",
      padding: "10px"
    },
    margin10: {
      margin: "10px"
    }
  })
);

const Answer = ({ delay, handleAnswerComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const classes = useStyles();

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAnswerCompleteInner();
      event.preventDefault();
    }
  };

  const handleAnswerCompleteInner = () => {
    handleAnswerComplete(userAnswer);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div>
          <Countdown360
            borderFillColor="#00ad00"
            seconds={delay}
            onComplete={handleAnswerCompleteInner}
          />
        </div>
        <div>
          <div className={classes.formWrapper}>
            <TextField
              data-testid="answer-input"
              autoFocus
              size="small"
              value={userAnswer}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              label="Введите запомненные числа"
              helperText="Введите в любой последовательности и нажмите Enter либо кнопку справа"
              variant="outlined"
              className={classes.margin10}
            />
            <Button
              data-testid="answer-complete-button"
              variant="contained"
              color="primary"
              onClick={handleAnswerCompleteInner}
              className={classes.margin10}
            >
              <Check />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Answer;
