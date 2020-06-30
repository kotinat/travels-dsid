import React from "react";

import { Link } from "react-router-dom";
import {
  TextField,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import "./register.css";

const Register = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

      {/* <FormControl> */}
      <Grid container>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="name">Nome</InputLabel>
            <TextField type="text" name="name" id="name" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="surname">Sobrenome</InputLabel>
            <TextField type="text" name="surname" id="surname" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="birthdate">Data de Nascimento</InputLabel>
            <TextField type="date" name="birthdate" id="birthdate" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="gender">Sexo</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={age}
              onChange={handleChange}
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
            <InputLabel htmlFor="phonenumber">Telefone</InputLabel>
            <TextField
              type="phone"
              name="phonenumber"
              id="phonenumber"
              placeholder="(XX)XXXXX-XXXX"
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
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="password1">Password</InputLabel>
            <TextField type="password" name="password1" id="password1" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="field">
            <InputLabel htmlFor="password2">Password, again</InputLabel>
            <TextField type="password" name="password2" id="password2" />
          </div>
        </Grid>
      </Grid>
      {/* </FormControl> */}
    </div>
  );
};

export default Register;
