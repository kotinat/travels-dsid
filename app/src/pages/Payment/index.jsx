import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

const register = {
  name: "Natalia",
  pedido: 981273982173,
  valor: 355,
};

const Payment = (props) => {
  return (
    <div>
      <header>
        <span>
          <Link to="/register">Voltar para o cadastro</Link>
        </span>
        <span>----|----</span>
        <span>
          <Link to="/">Voltar para a Home</Link>
        </span>

        <h1>Pagamento</h1>
      </header>

      <Typography variant="h3">{`Olá, ${register.name}!`}</Typography>
      <Typography>
        {`Sua reserva para ${props.accomodation.name} foi efetuada.`}
      </Typography>
      <Typography>{`O número do seu pedido é ${register.pedido}`}</Typography>
      <Typography>
        {`Utilize o QRcode abaixo para reaizar sua transferência no valor de R$${register.valor}`}
      </Typography>
      <Typography>
        Em caso de dúvidas, nos acione no e-mail:{" "}
        <strong>example@example.com</strong>
      </Typography>
      <Typography>Agradecemos a sua preferência. Até breve!</Typography>

      <Button href="/" variant="contained" color="secondary">
        Página inicial
      </Button>
    </div>
  );
};

export default withRouter(Payment);
