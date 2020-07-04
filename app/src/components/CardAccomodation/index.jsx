import React, { useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { getStars } from "../../controllers/starRating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3), 
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
  font: "ubuntu",
}));

const CardAccomodation = (props) => {
  const classes = useStyles();
  // const theme = useTheme();
  const [showDetails, setShowDetails] = useState(false);
  const convertedPrice = Math.ceil(props.price);

  async function handleShowDetails() {
    setShowDetails(!showDetails);
    props.setAccomodationId(props.id);
    props.setPrice(convertedPrice);
    props.history.push("/details");
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.src}
        alt={props.alt}
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
          <Typography>{`R$${convertedPrice}/noite`}</Typography>

          <Button
            className={classes.font}
            onClick={handleShowDetails}
            variant="contained"
            color="secondary"
          >
            Detalhes
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default withRouter(CardAccomodation);
