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
  const [guestBlankField, setGuestBlankField] = useState(false);

  function handleSubmit() {
    if (city === "") {
      setCityBlankField(true);
      return;
    }
    if (guest === "" || guest <= 0) {
      setGuestBlankField(true);
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
    if (cityBlankField === true) setCityBlankField(false);
    if (guestBlankField === true) setGuestBlankField(false);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setCityBlankField(false);
  }

  function handleEntryDateChange(date) {
    setEntryDate(date);
    const newDepartureDate = new Date();
    if (date === null) {
      alert("A data não pode ficar em branco!");
      setEntryDate(new Date());
      return;
    }
    setMinDate(newDepartureDate.setDate(date.getDate() + 1));
    if (date > departureDate) {
      setDepartureDate(newDepartureDate.setDate(date.getDate() + 1));
    }
  }

  function handleDepartureDateChange(date) {
    if (date === null) {
      alert("A data não pode ficar em branco!");
      setDepartureDate(tomorrow);
      return;
    }
    setDepartureDate(date);
  }

  function handleGuestChange(event) {
    setGuest(event.target.value);
    setGuestBlankField(false);
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
            error={cityBlankField}
            helperText={cityBlankField ? "Preencha a cidade." : ""}
            variant="outlined"
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
        {/* <Grid item xs={7}>
          <InputLabel htmlFor="guest">Quantas pessoas vão?</InputLabel>
        </Grid> */}
        <Grid item xs={3}>
          <InputLabel htmlFor="guest">Quantas pessoas vão?</InputLabel>
          <TextField
            id="guest"
            type="number"
            onChange={handleGuestChange}
            error={guestBlankField}
            helperText={guestBlankField ? "Mínimo 1 pessoa." : ""}
            variant="outlined"
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
