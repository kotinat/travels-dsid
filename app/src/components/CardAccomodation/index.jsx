import React, { useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./card-accomodation.css";

import { getStars } from "../../controllers/starRating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    background: "#ffffff",
    height: "15rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    // flex: "1 0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: "2rem",
    height: "13rem",
  },
  cover: {
    width: "13rem",
    height: "13rem",
    borderRadius: theme.spacing(2),
    display: "flex",
    boxShadow: "0px 8px 20px rgba(34, 35, 58, 0.3)",
    marginLeft: theme.spacing(2),
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    borderRadius: theme.spacing(1),
  },
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
          <Typography component="h4" variant="h4">
            {props.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {getStars(props.stars)}
          </Typography>
          <Typography variant="h6">{`R$${convertedPrice}/noite`}</Typography>

          <Button
            className={classes.button}
            onClick={handleShowDetails}
            variant="contained"
            color="primary"
          >
            Ver Detalhes
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default withRouter(CardAccomodation);
