import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Details} path="/details" />
      <Route component={Register} path="/register" />
      <Route component={Payment} path="/payment" />
    </BrowserRouter>
  );
};

export default Routes;
