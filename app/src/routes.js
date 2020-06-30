import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

const Routes = () => {
  const [accomodationId, setAccomodationId] = useState(null);
  const [accomodation, setAccomodation] = useState(null)
  // const [accomodationName, setccomodationName] = useState("Hotel teste");
  // const [pricePerNight, setPricePerNight] = useState("70");
  // const [stay, setStay] = useState("5");
  // const [accomodationPhoto, setAccomodationPhoto] = useState("brebles");

  return (
    <BrowserRouter>
      <Route
        render={() => <Home setAccomodationId={setAccomodationId} />}
        path="/"
        exact
      />
      <Route
        render={() => <Details accomodationId={accomodationId} />}
        path="/details"
      />
      <Route component={Register} path="/register" />
      <Route component={Payment} path="/payment" />
    </BrowserRouter>
  );
};

export default Routes;
