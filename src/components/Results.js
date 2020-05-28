import React from "react";
import Button from "@material-ui/core/Button";

const Results = ({message, handleMoreButton}) => {
  return <>
    <h4>{message}</h4>
    <Button variant="contained" color="primary" onClick={handleMoreButton}>Ещё!</Button>
  </>;
};

export default Results;
