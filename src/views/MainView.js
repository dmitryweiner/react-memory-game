import React, {Component} from "react";
import Button from "@material-ui/core/Button";

export default class MainView extends Component {
  render() {
    return (
      <>
       <h4>Игра на запоминание чисел</h4>
       <p>
         Вам будет предложено запомнить некоторые числа.
         После этого нужно будет их воспроизвести,
         не обязательно в том же порядке, за фиксированное время.
       </p>
       <Button variant="contained" color="primary" onClick={() => this.props.handleTabs(1)}>Играть!</Button>
      </>
    );
  }
}
