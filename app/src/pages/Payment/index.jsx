import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Payment = (props) => {
  console.log(props)
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
      </header>

      <h1>Pagamento</h1>
    </div>
  );
};

export default withRouter(Payment);
