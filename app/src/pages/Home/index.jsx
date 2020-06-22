import React from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Search from "../../components/Search";
import Accomodations from "../../components/Accomodations";
import Benefits from "../../components/Benefits";

import "./home.css";

const Home = () => {
  return (
    <div className="page-home">
      <Header />
      <Search />
      <main>
        <Accomodations />
        <Benefits />
        <Link to="/accomodations-list">
          <strong>testa aeee</strong>
        </Link>
      </main>
    </div>
  );
};

export default Home;
