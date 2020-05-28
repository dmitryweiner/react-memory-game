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
        <div style={{display: "flex", flexDirection: "row", padding: "10px"}}>
          <div>
            <Countdown360
              borderFillColor="#00ad00"
              seconds={this.props.delay}
              onComplete={this.handleAnswerComplete}
            />
          </div>
          <div>
            <div style={{display: "flex", flexDirection: "row", padding: "10px"}}>
              <TextField
                data-testid="answer-input"
                autoFocus
                size="small"
                value={this.state.userAnswer}
                onChange={this.handleInputChange}
                onKeyPress={this.handleKeyPress}
                label="Введите запомненные числа"
                helperText="Введите в любой последовательности и нажмите Enter либо кнопку справа"
                variant="outlined"
                style={{margin: "10px"}}
              />
              <Button
                data-testid="answer-complete-button"
                variant="contained"
                color="primary"
                onClick={this.handleAnswerComplete}
                style={{margin: "10px"}}
              >
                <Check/>
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Answer;
