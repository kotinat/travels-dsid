import React from "react";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Link to="/details">Voltar para os detalhes</Link>
      <div>--------------------------</div>
      <Link to="/payment">Ir para o pagamento</Link>
      <h1>Cadastro</h1>
    </div>
  );
};

export default Register;
