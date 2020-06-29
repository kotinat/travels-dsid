import React from "react";

import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <Link to="/register">Voltar para o cadastro</Link>
      <div>--------------------------</div>
      <Link to="/">Voltar para a Home</Link>
      <h1>Pagamento</h1>
    </div>
  );
};

export default Payment;
