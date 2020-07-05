import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Modal,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import qrPicPay from "../../assets/qrcode/picPay.png";
import Header from "../../components/Header";

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
  item: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  button: {
    width: theme.spacing(22),
    margin: theme.spacing(1, 0, 3),
    borderRadius: theme.spacing(1),
  },
}));

const Payment = (props) => {
  const accommodationName = props.accomodation.name; // comentar
  const { name, priceTotal, _id } = props.order.data.accommodationOrder; // comentar
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

  const handleModal = () => {
    handleOpen();
  };

  const body = (
    <div style={modalStyle} className={classes.modal}>
      <h2 id="simple-modal-title">Quase lá...</h2>
      <p id="simple-modal-description" style={{ textAlign: "center" }}>
        Utilize a câmera do seu celular para escanear o QRcode abaixo e realizar
        o pagamento do seu pedido.
      </p>
      <img src={qrPicPay} alt="Link que redireciona ao site do PicPay." />
    </div>
  );

  return (
    <Container>
      <Header showBack={false} showFoward={false} />

      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <Grid container justify="center">
            <Typography
              className={classes.item}
              variant="h3"
            >{`Olá, ${name}!`}</Typography>
            {/* <Typography
              className={classes.item}
              variant="h3"
            >{`Olá, xxxxxxx!`}</Typography> */}

            <Typography className={classes.item}>
              {`Sua reserva em ${accommodationName} foi efetuada.`}
            </Typography>
            {/* <Typography
              className={classes.item}
            >{`Sua reserva em xxxxxxxxx foi efetuada.`}</Typography> */}

            <Typography
              className={classes.item}
            >{`O código do seu pedido é ${_id}`}</Typography>
            {/* <Typography
              className={classes.item}
            >{`O código do seu pedido é xxxxxxxxxxxx`}</Typography> */}

            <Typography className={classes.item}>
              {`Utilize o QRcode abaixo para realizar sua transferência no valor de R$${priceTotal}`}
            </Typography>
            {/* <Typography className={classes.item}>
              {`Utilize o QRcode abaixo para realizar sua transferência no valor de R$xxxxx,xx`}
            </Typography> */}

            <Grid container justify="center">
              <Button
                onClick={handleModal}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Mostrar QRcode
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

            <Typography className={classes.item}>
              Em caso de dúvidas, nos acione no e-mail:
              <strong> contato@tripfindr.com</strong>
            </Typography>
            <Typography className={classes.item}>
              Agradecemos a sua preferência. Até breve!
            </Typography>

            <Grid container justify="center">
              <Button
                href="/"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Página inicial
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default withRouter(Payment);
