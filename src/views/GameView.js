import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Countdown360 from "react-countdown360";
import {Check} from "@material-ui/icons";
import Question from "../components/Question";
import {createRandomNumbers} from "../utils/randomNumbers";
import Answer from "../components/Answer";
import Results from "../components/Results";
import {checkAnswer} from "../utils/answers";

const GAME_STATE_IDLE = "idle";
const GAME_STATE_QUESTION = "question";
const GAME_STATE_ANSWER = "answer";

export default class GameView extends Component {
  state = {
    gameState: GAME_STATE_IDLE,
    numbers: [],
    message: ""
  };

  componentDidMount() {
    this.setState({
      gameState: GAME_STATE_QUESTION,
      numbers: createRandomNumbers(
        this.props.settings.numbersCount,
        this.props.settings.numbersMagnitude
      )
    });
  }

  handleQuestionComplete = () => {
    this.setState({gameState: GAME_STATE_ANSWER});
  };

  handleInputChange = (event, value) => {
    this.setState({userInput: value});
  };

  handleAnswerComplete = (userAnswer = "") => {
    let message;

    if (checkAnswer(this.state.numbers, userAnswer)) {
      // TODO: update stats
      message = "Правильный ответ!";
    } else {
      message = "К сожалению, ответ неправильный.";
    }

    this.setState({
      gameState: GAME_STATE_IDLE,
      message
    });
  };

  handleMore = () => {
    this.setState({
      gameState: GAME_STATE_QUESTION,
      numbers: createRandomNumbers(
        this.props.settings.numbersCount,
        this.props.settings.numbersMagnitude
      )
    });
  };

  render() {
    return (
      <>
        {this.state.gameState === GAME_STATE_QUESTION && (
          <Question
            numbers={this.state.numbers}
            delay={this.props.settings.delay}
            handleQuestionComplete={this.handleQuestionComplete}
          />
        )}
        {this.state.gameState === GAME_STATE_ANSWER && (
          <Answer
            delay={this.props.settings.delay}
            handleAnswerComplete={this.handleAnswerComplete}
          />
        )}
        {this.state.gameState === GAME_STATE_IDLE && (
          <Results
            message={this.state.message}
            handleMoreButton={this.handleMore}
          />
        )}
      </>
    );
  }
}
