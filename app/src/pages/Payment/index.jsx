import React, { useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Modal, Container } from "@material-ui/core";
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

const Payment = (props) => {
  // const accommodationName = props.accomodation.name;
  // const { name, priceTotal, _id } = props.order.data.accommodationOrder;
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
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Quase lá...</h2>
      <p id="simple-modal-description">
        Utilize a câmera do seu celular para escanear o QRcode abaixo e realizar
        o pagamento do seu pedido.
      </p>
      <img src={qrPicPay} alt="Link que redireciona ao site do PicPay." />
    </div>
  );

  return (
    <Container>
      <Header showBack={false} showFoward={false} />

      {/* <Typography variant="h3">{`Olá, ${name}!`}</Typography> */}
      <Typography variant="h3">{`Olá, xxxxxxx!`}</Typography>

      {/* <Typography>
        {`Sua reserva em ${accommodationName} foi efetuada.`}
      </Typography> */}
      <Typography>{`Sua reserva em xxxxxxxxx foi efetuada.`}</Typography>

      {/* <Typography>{`O código do seu pedido é ${_id}`}</Typography> */}
      <Typography>{`O código do seu pedido é xxxxxxxxxxxx`}</Typography>

      {/* <Typography>
        {`Utilize o QRcode abaixo para realizar sua transferência no valor de R$${priceTotal}`}
      </Typography> */}
      <Typography>
        {`Utilize o QRcode abaixo para realizar sua transferência no valor de R$xxxxx,xx`}
      </Typography>

      <Button onClick={handleModal} variant="contained" color="secondary">
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
      <Typography>
        Em caso de dúvidas, nos acione no e-mail:{" "}
        <strong>contato@tripfindr.com</strong>
      </Typography>
      <Typography>Agradecemos a sua preferência. Até breve!</Typography>

      <Button href="/" variant="contained" color="secondary">
        Página inicial
      </Button>
    </Container>
  );
};

export default withRouter(Payment);
