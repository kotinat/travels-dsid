import React, { useState } from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import { getStars } from "../../controllers/starRating";
import { te } from "date-fns/locale";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    background: "#ffffff",
    height: "16rem",
    width: "100%",
    padding: 0,
  },
  content: {
    textAlign: "end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space around",
    maxWidth: "270px",
    maxHeight: "13rem",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    padding: 0,
  },
  cover: {
    width: "13rem",
    height: "13rem",
    borderRadius: theme.spacing(2),
    boxShadow: "0px 8px 20px rgba(34, 35, 58, 0.3)",
    marginLeft: theme.spacing(2),
  },
  items: {
    display: "flex",
    justifyContent: "flex-end",
    width: "auto",
    // marginBottom: theme.spacing(1),
  },
  button: {
    alignSelf: "flex-end",
    maxWidth: theme.spacing(20),
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(1),
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
    console.log(props);
    props.setAccomodationImg(props.src);
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
      <CardContent className={classes.content}>
        <Typography className={classes.items} component="h4" variant="h4">
          {props.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <Box
            className={classes.items}
            fontWeight="fontWeightBold"
            fontSize="h6.fontSize"
          >
            {getStars(props.stars)}
          </Box>
        </Typography>
        <Typography
          className={classes.items}
          variant="h6"
        >{`R$${convertedPrice}/noite`}</Typography>

        <Button
          className={classes.button}
          onClick={handleShowDetails}
          variant="contained"
          color="primary"
        >
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default withRouter(CardAccomodation);
