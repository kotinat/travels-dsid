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
} from "@material-ui/core";
import axios from "axios";
import register from "../../services/register";

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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Register = (props) => {
  // state do gênero
  const [selectedGender, setselectedGender] = React.useState("");
  // state dos dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthdate: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  // state do modal
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

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

  // função que captura interação de input, genericamente
  // assim não é preciso fazer um handle para cada campo
  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const gender = selectedGender;
    const { name, surname, birthdate, phoneNumber, email, password } = formData;

    const data = {
      name,
      surname,
      birthdate,
      gender,
      phoneNumber,
      email,
      password,
    };

    await register.post("register", JSON.stringify(data));
    // const newUser =
    // const order = {
    //   accId: props.accomodationId,
    //   pricePerNight: props.price,
    //   priceTotal: props.total(),
    //   userId: newUser.data.user._id,
    // };
    // AGORA SÓ FALTA FAZER O POST DA API!!
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
            <InputLabel htmlFor="name">Nome</InputLabel>
            <TextField
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="surname">Sobrenome</InputLabel>
            <TextField
              type="text"
              name="surname"
              id="surname"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="birthdate">Data de Nascimento</InputLabel>
            <TextField
              type="date"
              name="birthdate"
              id="birthdate"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="gender">Sexo</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={selectedGender}
              onChange={handleGenderChange}
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
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <TextField
              type="email"
              name="email"
              id="email"
              placeholder="example.@example.com"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="password1">Password</InputLabel>
            <TextField
              type="password"
              name="password1"
              id="password1"
              onChange={handleInputChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="password2">Password, again</InputLabel>
            <TextField type="password" name="password2" id="password2" />
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
