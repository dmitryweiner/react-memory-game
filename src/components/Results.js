import React from "react";
import Button from "@material-ui/core/Button";
import {MAIN_TAB_INDEX} from "../App";
import Statistics from "./Statistics";
import Alert from '@material-ui/lab/Alert';

const Results = ({stats, message, messageType, handleMoreButton, handleBackButton}) => {
  return <>
    <Alert severity={messageType}>{message}</Alert>
    <Statistics {...stats}/>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
      <Button variant="contained" color="secondary" onClick={() => handleBackButton(MAIN_TAB_INDEX)}>Хватит</Button>
      <Button variant="contained" color="primary" onClick={handleMoreButton}>Ещё!</Button>
    </div>
  </>;
};

export default Results;
