import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Container,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasicDatePicker from "../BasicDatePicker";
import { transformDate } from "../../controllers/dateAccomodation";

const useStyles = makeStyles((theme) => ({
  inputs: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

const Search = (props) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [entryDate, setEntryDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(tomorrow);
  const [guest, setGuest] = useState("");
  const [cityBlankField, setCityBlankField] = useState(false);
  const [minDate, setMinDate] = useState(tomorrow);

  function handleSubmit() {
    if (city == "") {
      setCityBlankField(true);
      return;
    }
    props.onSearch({
      city: city,
      entryDate: transformDate(entryDate),
      unformattedEntryDate: entryDate,
      unformattedDepartureDate: departureDate,
      departureDate: transformDate(departureDate),
      guest: guest,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleEntryDateChange(date) {
    setEntryDate(date);
    const newDepartureDate = new Date();
    setMinDate(newDepartureDate.setDate(date.getDate() + 1));
    if (date > departureDate) {
      setDepartureDate(newDepartureDate.setDate(date.getDate() + 1));
    }
  }

  function handleDepartureDateChange(date) {
    setDepartureDate(date);
  }

  function handleGuestChange(event) {
    setGuest(event.target.value);
  }

  return (
    <Container maxWidth="xs" className="container-search">
      <Grid container className={classes.inputs}>
        <Grid item xs={12}>
          <TextField
            placeholder="Digite aqui o seu próximo destino"
            onChange={handleCityChange}
            autoFocus
            fullWidth
            // label="Obrigatório*"
            error={cityBlankField}
            helperText={cityBlankField ? "Preencha a cidade." : ""}
          />
        </Grid>
        <Grid item xs={5}>
          <BasicDatePicker
            id="entrada"
            label="Entrada"
            selectedDate={entryDate}
            setSelectedDate={setEntryDate}
            onChange={handleEntryDateChange}
          />
        </Grid>
        <Grid item xs={5}>
          <BasicDatePicker
            id="saida"
            label="Saída"
            selectedDate={departureDate}
            setSelectedDate={setDepartureDate}
            onChange={handleDepartureDateChange}
            minDate={minDate}
          />
        </Grid>
        <Grid item xs={8}>
          <InputLabel htmlFor="guest">Quantas pessoas vão?</InputLabel>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="guest"
            type="number"
            onChange={handleGuestChange}
            defaultValue={2}
          />
        </Grid>
        <Grid container xs={12} justify="center">
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={handleSubmit}
          >
            Procurar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;
