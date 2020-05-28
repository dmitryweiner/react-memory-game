import React, {Component} from "react";
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
    message: "",
    messageType: "success"
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
    let message, messageType;
    const isAnswerCorrect = checkAnswer(this.state.numbers, userAnswer);

    if (isAnswerCorrect) {
      message = "Правильный ответ!";
      messageType = "success";
    } else {
      message = "К сожалению, ответ неправильный.";
      messageType = "error";
    }
    this.props.handleStatisticsUpdate(isAnswerCorrect);

    this.setState({
      gameState: GAME_STATE_IDLE,
      message,
      messageType
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
            stats={this.props.stats}
            message={this.state.message}
            messageType={this.state.messageType}
            handleMoreButton={this.handleMore}
            handleBackButton={this.props.handleTabs}
          />
        )}
      </>
    );
  }
}
