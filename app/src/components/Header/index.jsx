import React from "react";
import { makeStyles } from "@material-ui//core/styles";

const useStyles = makeStyles(() => ({
  font: {
    fontFamily: "ubuntu",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.font}>
      <h1>Awesome Travels</h1>
      <p>Go far.</p>
    </header>
  );
};

export default Header;
