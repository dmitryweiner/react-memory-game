import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default class SettingsView extends Component {
  render() {
    return (
      <>
        <Typography id="discrete-slider" gutterBottom>
          Количество чисел
        </Typography>
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          value={this.props.settings.numbersCount}
          step={1}
          min={1}
          max={6}
          onChange={(event, value) => this.props.handleSettingsChange("numbersCount", value)}
        />

        <Typography id="discrete-slider" gutterBottom>
          Величина чисел
        </Typography>
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          value={this.props.settings.numbersMagnitude}
          step={1}
          min={1}
          max={5}
          onChange={(event, value) => this.props.handleSettingsChange("numbersMagnitude", value)}
        />

        <Typography id="discrete-slider" gutterBottom>
          Время демонстрации
        </Typography>
        <Slider
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          value={this.props.settings.delay}
          step={1}
          min={5}
          max={30}
          onChange={(event, value) => this.props.handleSettingsChange("delay", value)}
        />

        <Button variant="contained" color="primary" onClick={() => this.props.handleTabs(1)}>
          Играть!
        </Button>
      </>
    );
  }
}
