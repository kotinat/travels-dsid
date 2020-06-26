import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { getAccomodationDetailById } from "../../services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function getStars(starNumber) {
  var result = "";
  for (var i = 0; i < starNumber; i++) {
    result = result.concat("✮");
  }
  return result;
}

const CardAccomodation = (props) => {
  const classes = useStyles();
  // const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null);

  async function handleOquevocequiser() {
    const ansioso = await getAccomodationDetailById(props.id);
    setDetails(ansioso);
    setShowDetails(!showDetails);
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={`${props.name}`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {getStars(props.stars)}
          </Typography>
          <Typography>{`R$${props.price}/noite`}</Typography>
          <Button onClick={handleOquevocequiser}>Detalhes</Button>
        </CardContent>
      </div>
      <div>{JSON.stringify(details)}</div>
    </Card>
  );
};

export default CardAccomodation;
