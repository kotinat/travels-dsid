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
  Typography,
  Container,
  Paper,
  Box,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import register from "../../services/register";
import apiorder from "../../services/apiorder";
import Header from "../../components/Header";
import Alert from "@material-ui/lab/Alert";
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
  container: {},
  modal: {
    position: "absolute",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
  paper: {
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  paperContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2),
    marginTop: 0,
    width: "229px",
    minWidth: "148px",
  },
  button: {
    minWidth: theme.spacing(14),
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

const messageErrorApi = "Falha ao mandar os dados. Por favor tente novamente.";
const messageErrorUser =
  "E-mail já cadastrado! Tente novamente com outro endereço de e-mail.";
const messageRequiredFields = "Preencha todos os campos obrigatórios.";

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
  // state validações do form
  const [nameBlank, setNameBlank] = useState(false);
  const [surnameBlank, setSurnameBlank] = useState(false);
  const [emailBlank, setEmailBlank] = useState(false);
  const [errorApi, setErrorApi] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [errorRequiredFields, setErrorrequiredFields] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.modal}>
      <p id="simple-modal-description">Cadastro efetuado com sucesso!</p>
      <span>
        <Link to="/payment" style={{ textDecoration: "none" }}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
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
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (nameBlank === true) setNameBlank(false);
    if (surnameBlank === true) setSurnameBlank(false);
    if (emailBlank === true) setEmailBlank(false);
    if (errorRequiredFields === true) setErrorrequiredFields(false);
  }

  function handleCancelSubmit(event) {
    event.preventDefault();
    props.history.push("/details");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const gender = selectedGender;
    const birthdate = selectedDate;
    const { name, surname, phoneNumber, email } = formData;
    if (name === "" || name === null) {
      setNameBlank(true);
      setErrorrequiredFields(true);
      return;
    }
    if (surname === "" || surname === null) {
      setSurnameBlank(true);
      setErrorrequiredFields(true);
      return;
    }
    if (email === "" || email === null) {
      setEmailBlank(true);
      setErrorrequiredFields(true);
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

    try {
      // const newUser = await register.post("register", JSON.stringify(data)); // comentar
      setLoading(false);
      // comentar
      // const order = {
      //   name: name,
      //   accommodationId: props.accomodationId,
      //   pricePerNight: props.price,
      //   priceTotal: props.total(),
      //   userId: newUser.data.user._id,
      // };

      // const newOrder = await apiorder.post("orders", JSON.stringify(order));

      // props.setOrder(newOrder);
      // até aqui
      setLoading(false);
      handleOpen();
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.message.includes("406")) setErrorUser(true);
      else setErrorApi(true);
    }
  }

  return (
    <Container>
      <Header
        showBack={false}
        back={"/details"}
        showFoward={false}
        foward={"/payment"}
      />
      {/* <Container container width="md" justify="center"> */}
      <Grid container justify="center">
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Typography variant="h4">
              <Box fontWeight="fontWeightBold">Cadastro</Box>
            </Typography>
            <Typography variant="subtitle2">
              Campos marcados com (*) são obrigatórios.
            </Typography>
            {errorApi && <Alert severity="error">{messageErrorApi}</Alert>}
            {errorUser && <Alert severity="info">{messageErrorUser}</Alert>}
            {errorRequiredFields && (
              <Alert severity="warning">{messageRequiredFields}</Alert>
            )}

            <Grid className={classes.paperContainer} container justify="center">
              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
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
                </Box>
              </Grid>

              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
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
                </Box>
              </Grid>

              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
                  <InputLabel htmlFor="birthdate">
                    Data de Nascimento
                  </InputLabel>
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
                </Box>
              </Grid>

              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
                  <InputLabel htmlFor="gender">Sexo</InputLabel>
                  <Select
                    variant="outlined"
                    labelId="gender"
                    id="gender"
                    value={selectedGender}
                    onChange={handleGenderChange}
                    defaultValue={"Selecione"}
                    fullWidth
                  >
                    <MenuItem value="Masculino">Masculino</MenuItem>
                    <MenuItem value="Feminino">Feminino</MenuItem>
                    <MenuItem value="Prefiro não declarar">
                      Prefiro não declarar
                    </MenuItem>
                  </Select>
                </Box>
              </Grid>

              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
                  <InputLabel htmlFor="phoneNumber">Telefone</InputLabel>
                  <TextField
                    variant="outlined"
                    type="phone"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="(XX)XXXXX-XXXX"
                    onChange={handleInputChange}
                  />
                </Box>
              </Grid>

              <Grid container justify="center" xs={5}>
                <Box className={classes.input}>
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
                </Box>
              </Grid>
              <Grid container justify="center" xs={12}>
                <Button
                  onClick={handleCancelSubmit}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
            {loading && <CircularProgress color="primary" />}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    // </Container>
  );
};

export default withRouter(Register);
