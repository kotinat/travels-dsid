import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AccomodationsList from "./pages/AccomodationsList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={AccomodationsList} path="/accomodations-list" />
    </BrowserRouter>
  );
};

export default Routes;