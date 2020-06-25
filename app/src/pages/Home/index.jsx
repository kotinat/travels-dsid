import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Search from "../../components/Search";
import AccomodationsList from "../AccomodationsList";

import { getCityIdByName, getAccomodationsById } from "../../services/api";
import axios from "axios";

import "./home.css";

const Home = () => {
  // um pouco de como buscar os dados da API
  const [data, setData] = useState([]);
  // teste pra mostrar a lista de acomodações ao clicar no botão submit
  const [showList, setShowList] = useState(false);

  async function handleSearch(obj) {
    // console.log(farofa);

    const cityId = await getCityIdByName(obj.city);
    const accomodationsList = await getAccomodationsById(cityId);
    setData(accomodationsList);
    setShowList(true);
  }

  function handleNatalia(batata) {
    console.log("IHA");
  }

  console.log("natalia", data);

  return (
    <div className="page-home">
      <Header />
      <Search onSearch={handleSearch} onNatalia={handleNatalia} />
      <main>
        {showList && <AccomodationsList data={data} />}
        <Link to="/accomodations-list">
          <strong>testa aeee</strong>
        </Link>
      </main>
    </div>
  );
};

export default Home;
