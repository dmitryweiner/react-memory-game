import React, { Component } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./App.css";
import SettingsView from "./views/SettingsView";
import MainView from "./views/MainView";
import GameView from "./views/GameView";

export const MAIN_TAB_INDEX = 0;
export const GAME_TAB_INDEX = 1;
export const SETTINGS_TAB_INDEX = 2;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  wrapper: {
    width: '800px',
    margin: '0 auto'
  }
}));*/

class App extends Component {
  state = {
    tabIndex: 0,
    settings: {
      numbersCount: 3,
      numbersMagnitude: 1,
      delay: 5
    },
    stats: {
      games: 0,
      successful: 0
    }
  };

  setTabIndex = (tabIndex) => {
    this.setState({ tabIndex });
  };

  handleTabIndexChange = (event, newValue) => {
    this.setTabIndex(newValue);
  };

  handleSettingsChange = (name, value) => {
    this.setState({ settings: { ...this.state.settings, [name]: value } });
  };

  handleStatisticsUpdate = (result) => {
    const newStats = { ...this.state.stats };
    if (result) {
      newStats.successful += 1;
    }
    newStats.games += 1;
    this.setState({
      stats: newStats
    });
  };

  render() {
    //const classes = useStyles();
    return (
      <div className="tabs-wrapper">
        <div className="tabs-root">
          <AppBar position="static">
            <Tabs
              value={this.state.tabIndex}
              onChange={this.handleTabIndexChange}
              aria-label="simple tabs example"
            >
              <Tab label="Главная" {...a11yProps(MAIN_TAB_INDEX)} />
              <Tab label="Игра" {...a11yProps(GAME_TAB_INDEX)} />
              <Tab label="Настройки" {...a11yProps(SETTINGS_TAB_INDEX)} />
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.tabIndex} index={MAIN_TAB_INDEX}>
            <MainView stats={this.state.stats} handleTabs={this.setTabIndex} />
          </TabPanel>
          <TabPanel value={this.state.tabIndex} index={GAME_TAB_INDEX}>
            <GameView
              stats={this.state.stats}
              settings={this.state.settings}
              handleTabs={this.setTabIndex}
              handleStatisticsUpdate={this.handleStatisticsUpdate}
            />
          </TabPanel>
          <TabPanel value={this.state.tabIndex} index={SETTINGS_TAB_INDEX}>
            <SettingsView
              handleTabs={this.setTabIndex}
              handleSettingsChange={this.handleSettingsChange}
              settings={this.state.settings}
            />
          </TabPanel>
        </div>
      </div>
    );
  }
}

export default App;
