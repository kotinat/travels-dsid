import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Modal,
  CircularProgress,
} from "@material-ui/core";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import register from "../../services/register";
import apiorder from "../../services/apiorder";

import "./register.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    justifyContent: "center",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Register = (props) => {
  // state do gênero
  const [selectedGender, setselectedGender] = useState("");
  const [selectedDate, setselectedDate] = useState(new Date());
  // state dos dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  // state do modal
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [nameBlank, setNameBlank] = useState(false);
  const [surnameBlank, setSurnameBlank] = useState(false);
  const [emailBlank, setEmailBlank] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Nice!</h2>
      <p id="simple-modal-description">Cadastro efetuado com sucesso!</p>
      <span>
        <Link to="/payment">
          <Button variant="contained" color="secondary">
            Ir para o pagamento
          </Button>
        </Link>
      </span>
    </div>
  );

  // alteração do state de gênero
  // separado por conta do select que ele possui
  const handleGenderChange = (event) => {
    setselectedGender(event.target.value);
  };

  // const handleDateChange = (event) => {
  //   setselectedDate(event.target.value);
  // };
  // função que captura interação de input, genericamente
  // assim não é preciso fazer um handle para cada campo
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (nameBlank === true) setNameBlank(false);
    if (surnameBlank === true) setSurnameBlank(false);
    if (emailBlank === true) setEmailBlank(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const gender = selectedGender;
    const birthdate = selectedDate;
    const { name, surname, phoneNumber, email } = formData;
    if (name === "" || name === null) {
      setNameBlank(true);
      alert("Por favor, preencha os campos obrigatórios marcados com *.");
      return;
    }
    if (surname === "" || surname === null) {
      setSurnameBlank(true);
      alert("Por favor, preencha os campos obrigatórios marcados com *.");
      return;
    }
    if (email === "" || email === null) {
      setEmailBlank(true);
      alert("Por favor, preencha os campos obrigatórios marcados com *.");
      return;
    }

    const data = {
      name,
      surname,
      birthdate,
      gender,
      phoneNumber,
      email,
    };

    setLoading(true);
    const newUser = await register.post("register", JSON.stringify(data));
    setLoading(false);
    const order = {
      name: name,
      accommodationId: props.accomodationId,
      pricePerNight: props.price,
      priceTotal: props.total(),
      userId: newUser.data.user._id,
    };

    const newOrder = await apiorder.post("orders", JSON.stringify(order));

    props.setOrder(newOrder);
    setLoading(false);
    handleOpen();
  }

  return (
    <div>
      <header>
        <span>
          <Link to="/details">Voltar para os detalhes</Link>
        </span>
        <span>----|----</span>
        <span>
          <Link to="/payment">Ir para o pagamento</Link>
        </span>
      </header>

      <h1>Cadastro</h1>

      <Grid container>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="name">Nome*</InputLabel>
            <TextField
              variant="outlined"
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
              error={nameBlank}
              helperText={nameBlank ? "Campo obrigatório." : ""}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="surname">Sobrenome*</InputLabel>
            <TextField
              variant="outlined"
              type="text"
              name="surname"
              id="surname"
              onChange={handleInputChange}
              error={surnameBlank}
              helperText={surnameBlank ? "Campo obrigatório." : ""}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="birthdate">Data de Nascimento</InputLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                inputVariant="outlined"
                disableFuture
                name="birthdate"
                id="birthdate"
                openTo="year"
                format="dd/MM/yyyy"
                views={["year", "month", "date"]}
                value={selectedDate}
                onChange={setselectedDate}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="gender">Sexo</InputLabel>
            <Select
              variant="outlined"
              labelId="gender"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
              defaultValue={"Selecione"}
            >
              <MenuItem value="Masculino">Masculino</MenuItem>
              <MenuItem value="Feminino">Feminino</MenuItem>
              <MenuItem value="Prefiro não declarar">
                Prefiro não declarar
              </MenuItem>
            </Select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="phoneNumber">Telefone</InputLabel>
            <TextField
              variant="outlined"
              type="phone"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="(XX)XXXXX-XXXX"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div className="field">
            <InputLabel htmlFor="email">E-mail*</InputLabel>
            <TextField
              variant="outlined"
              type="email"
              name="email"
              id="email"
              placeholder="example.@example.com"
              onChange={handleInputChange}
              error={emailBlank}
              helperText={emailBlank ? "Campo obrigatório." : ""}
            />
          </div>
        </Grid>
        <Button
          onClick={handleSubmit}
          href="/payment"
          variant="contained"
          color="secondary"
        >
          Enviar
        </Button>
        {loading && <CircularProgress color="secondary" />}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Grid>
    </div>
  );
};

export default withRouter(Register);
