import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import DatePicker from "../DatePicker";

const Search = () => {
  return (
    <div className="container-search">
      <form>
      <Grid container>
        <Grid item xs={"12"}>
          <TextField id='standard-basic' placeholder="Digite aqui a cidade do seu próximo destino." />
        </Grid>
        <Grid item xs={"3"}>
          <DatePicker label="Entrada" />
        </Grid>
        <Grid item xs={"3"}>
          <DatePicker label="Saída" />
        </Grid>
      </Grid>
      </form>
      
    </div>
  );
};

export default Search;
