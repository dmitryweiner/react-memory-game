import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default class SettingsView extends Component {
  render() {
    return <>
      <Typography id="discrete-slider" gutterBottom>
        Количество чисел
      </Typography>
      <Slider
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        defaultValue={3}
        step={1}
        min={1}
        max={6}
      />

      <Typography id="discrete-slider" gutterBottom>
        Величина чисел
      </Typography>
      <Slider
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        defaultValue={1}
        step={1}
        min={1}
        max={5}
      />

      <Typography id="discrete-slider" gutterBottom>
        Время демонстрации
      </Typography>
      <Slider
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        defaultValue={10}
        step={1}
        min={5}
        max={30}
      />

      <Button variant="contained" color="primary" onClick={() => this.props.handleTabs(1)}>Играть!</Button>
    </>;
  }
}
