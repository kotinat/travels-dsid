import React, { useState } from "react";

// componentes prontos
import { Link } from "react-router-dom";

// meus componentes
import Header from "../../components/Header";
import Search from "../../components/Search";
import AccomodationsList from "../../components/AccomodationsList";
// import Details from '../Details'

// serviços
import { getCityIdByName, getAccomodationsById } from "../../services/api";

// estilos
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(false);

  async function handleSearch(obj) {
    const cityId = await getCityIdByName(obj.city);
    const accomodationsList = await getAccomodationsById(cityId);
    setData(accomodationsList);
    setShowList(true);
  }

  return (
    <div className="page-home">
      <Header />
      <Search onSearch={handleSearch} />
      {showList && <AccomodationsList data={data} />}
      <Link to='/details'>Go to details</Link>
    </div>
  );
};

export default Home;
