import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Payment from "./pages/Payment";

const Routes = () => {
  const [accomodationId, setAccomodationId] = useState(null);
  const [accomodation, setAccomodation] = useState({});
  const [price, setPrice] = useState(0);
  const [countOfDays, setCountOfDays] = useState(0);
  const total = () => price * countOfDays;
  const [order, setOrder] = useState({})

  return (
    <BrowserRouter>
      <Route
        render={() => (
          <Home
            setAccomodationId={setAccomodationId}
            price={price}
            setPrice={setPrice}
            setCountOfDays={setCountOfDays}
            countOfDays={countOfDays}
            total={total}
          />
        )}
        path="/"
        exact
      />
      <Route
        render={() => (
          <Details
            accomodationId={accomodationId}
            accomodation={accomodation}
            setAccomodation={setAccomodation}
            price={price}
            setPrice={setPrice}
            total={total}
          />
        )}
        path="/details"
      />
      <Route
        render={() => (
          <Register
            accomodation={accomodation}
            accomodationId={accomodationId}
            total={total}
            price={price}
            setOrder={setOrder}
          />
        )}
        path="/register"
      />
      <Route
        render={() => (
          <Payment
            accomodation={accomodation}
            accomodationId={accomodationId}
            order={order}
          />
        )}
        path="/payment"
      />
    </BrowserRouter>
  );
};

export default Routes;
