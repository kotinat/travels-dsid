import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "../Card/index";

const useStyles = makeStyles((theme) => ({
  spacing: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Accomodations = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.spacing}>
        {[0, 1, 2, 3].map((value) => (
          <Grid key={value} item>
            <Card />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Accomodations;
