import React from "react";

import { Link } from "react-router-dom";

const Payment = () => {
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

export default Payment;
