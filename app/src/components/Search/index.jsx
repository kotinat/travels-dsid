import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BasicDatePicker from "../BasicDatePicker";

const useStyles = makeStyles((theme) => ({
  inputs: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  font: {
    fontFamily: "ubuntu",
  },
}));

const Search = (props) => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [entryDate, setEntryDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [guest, setGuest] = useState("0");

  function handleSubmit() {
    props.onSearch({
      city: city,
      entryDate: entryDate,
      departureDate: departureDate,
      guest: guest,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleEntryDateChange(event) {
    setEntryDate(event.target.value);
  }

  function handleDepartureDateChange(event) {
    setDepartureDate(event.target.value);
  }

  function handleGuestChange(event) {
    setGuest(event.target.value);
  }

  return (
    <div className="container-search">
      <Grid container className={classes.inputs}>
        <Grid item xs={12}>
          <TextField
            placeholder="Digite aqui o seu próximo destino"
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={3}>
          <BasicDatePicker
            id="entrada"
            label="Entrada"
            selectedDate={entryDate}
            setSelectedDate={setEntryDate}
            onChange={handleEntryDateChange}
          />
        </Grid>
        <Grid item xs={3}>
          <BasicDatePicker
            id="saida"
            label="Saída"
            selectedDate={departureDate}
            setSelectedDate={setDepartureDate}
            onChange={handleDepartureDateChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            placeholder="Selecione a quantidade de pessoas"
            type="number"
            onChange={handleGuestChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.font}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Procurar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
