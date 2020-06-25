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

const Accomodations = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <Grid container className={classes.spacing}>
        {props.data.data.suggestions.map((value) => (
          <Grid key={value} item>
            <Card />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Accomodations;
