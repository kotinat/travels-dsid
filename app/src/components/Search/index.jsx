import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "../DatePicker";

const useStyles = makeStyles((theme) => ({
  inputs: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className="container-search">
      <form>
        <Grid container className={classes.inputs}>
          <Grid item xs={"12"}>
            <TextField
              id="standard-basic"
              placeholder="Digite aqui a cidade do seu próximo destino."
              style={{ width: "50%" }}
            />
          </Grid>
          <Grid item xs={"3"}>
            <DatePicker label="Entrada" />
          </Grid>
          <Grid item xs={"3"}>
            <DatePicker label="Saída" />
          </Grid>
          <Grid item xs={"12"}>
            <TextField
              id="standard-basic"
              placeholder="Digite aqui a cidade do seu próximo destino."
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Search;
