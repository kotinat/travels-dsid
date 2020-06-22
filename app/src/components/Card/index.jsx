import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import london from "../../assets/img/london.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: theme.spacing(2),
  },
  font: {
    fontFamily: "ubuntu",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={london}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.font}
            gutterBottom
            variant="h5"
            component="h2"
          >
            London
          </Typography>
          <Typography
            className={classes.font}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            A beautiful place to visit. It rains a lot.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.font}>
          View Price
        </Button>
        <Button size="small" color="primary" className={classes.font}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
