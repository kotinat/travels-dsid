import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import logo from "../../assets/img/tripFindr.png";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  header: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img className="logo" src={logo} />
      {props.showBack && <Link to={props.back}>Voltar</Link>}
      {props.showFoward && <Link to={props.foward}>Avançar</Link>}
      <div>
        <a href="https://www.facebook.com/">
          <FacebookIcon color="action" />
        </a>
        <a href="https://twitter.com/explore">
          <TwitterIcon color="action" />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon color="action" />
        </a>
        <a href="https://github.com/kotinat/travels-dsid">
          <GitHubIcon color="action" />
        </a>
        <a href="https://www.youtube.com/">
          <YouTubeIcon color="action" />
        </a>
      </div>
    </header>
  );
};

export default Header;
