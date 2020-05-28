import React, {Component} from "react";
import Countdown360 from "react-countdown360";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Check} from "@material-ui/icons";

class Answer extends Component {
  state = {
    userAnswer: ""
  };

  handleInputChange = (event) => {
    this.setState({
      userAnswer: event.target.value
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleAnswerComplete();
      event.preventDefault();
    }
  };

  handleAnswerComplete = () => {
    this.props.handleAnswerComplete(this.state.userAnswer);
  };

  render() {
    return (
      <>
        <Countdown360
          seconds={this.props.delay}
          onComplete={this.handleAnswerComplete}
        />
        <TextField
          data-testid="answer-input"
          autoFocus
          value={this.state.userAnswer}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          label="Введите запомненные числа"
          helperText="Введите в любой последовательности и нажмите Enter либо кнопку справа"
          variant="outlined"
        />
        <Button
          data-testid="answer-complete-button"
          variant="contained"
          color="primary"
          onClick={this.handleAnswerComplete}
        >
          <Check/>
        </Button>
      </>
    );
  }
}

export default Answer;
