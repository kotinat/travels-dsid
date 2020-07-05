import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
    </header>
  );
};

export default Header;
