import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      border: "#DDDDDD 1px solid",
      margin: theme.spacing(1),
      width: theme.spacing(24),
      height: theme.spacing(48),
    },
  },
  paragraph: {
    fontSize: "14px",
    padding: theme.spacing(1),
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
}));
const Benefits = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {[0, 1, 2, 3].map((item) => (
        <Paper className={classes.paragraph} elevation={0}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
        </Paper>
      ))}
    </div>
  );
};

export default Benefits;
