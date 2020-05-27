import React, {Component} from "react";
import Game from "../components/Game";

const GAME_STATE_IDLE = "idle";
const GAME_STATE_RUNNING = "running";

export default class GameView extends Component {
  state = {
    gameState: GAME_STATE_RUNNING
  };

  render() {
    return (
      <>
        <Game/>
      </>
    );
  }
}
