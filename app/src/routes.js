import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AccomodationsList from "./pages/AccomodationsList";
import Details from "./pages/Details";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={AccomodationsList} path="/accomodations-list" />
      <Route component={Details} path="/details" />
    </BrowserRouter>
  );
};

export default Routes;
