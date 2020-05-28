import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

const Statistics = ({games, successful}) => {
  const classes = useStyles();

  return <div className={classes.root}>
      <Paper className={classes.paper}>Всего сыграно игр: {games}</Paper>
      <Paper className={classes.paper}>Правильных ответов: {successful}</Paper>
    </div>;
};

export default Statistics;
