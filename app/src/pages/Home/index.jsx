import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Search from "../../components/Search";
// import Accomodations from "../../components/Accomodations";
import Benefits from "../../components/Benefits";
import CardAccomodation from "../../components/CardAccomodation";
import AccomodationsList from "../AccomodationsList";

import axios from "axios";

import "./home.css";

const Home = () => {
  // const [data, setData] = useState([]);
  // const [statusLoading, setStatusLoading] = useState(true);
  // const [statusError, setStatusError] = useState(false);

  // useEffect(() => {
  //   try {
  //     const runEffect = async () => {
  //       const result = await axios(
  //         "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york",
  //         {
  //           headers: {
  //             "x-rapidapi-host": "hotels4.p.rapidapi.com",
  //             "x-rapidapi-key":
  //               "c626a77cf3mshd941269529d5468p113f2bjsn3a0c3d574b63",
  //           },
  //         }
  //       );
  //       setData(result.data.suggestions[3].entities);
  //     };
  //     // setStatusLoading(false)
  //     runEffect();
  //     setStatusLoading(false);
  //   } catch (e) {
  //     setStatusError(true);
  //     console.log(e);
  //   }
  // }, []);

  // // setStatusLoading(false);
  // console.log(statusLoading);

  const [showList, setShowList] = useState(false);

  function handleSearch(farofa){
    console.log(farofa);
    setShowList(true);
  }

  function handleNatalia(batata){
    console.log('IHA')
  }

  return (
    <div className="page-home">
      <Header />
      <Search onSearch={handleSearch} onNatalia={handleNatalia}/>
      <main>
      {showList && <AccomodationsList/>}
        <Link to="/accomodations-list">
          <strong>testa aeee</strong>
        </Link>
      </main>
    </div>
  );
};

export default Home;
