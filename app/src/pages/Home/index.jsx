<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
=======
import React, { useState, useRef, useEffect } from "react";
>>>>>>> Stashed changes

import Header from "../../components/Header";
import Search from "../../components/Search";
import AccomodationsList from "../AccomodationsList";

<<<<<<< Updated upstream
import SearchLocationInput from '../../controllers/SearchLocationInput';
=======
import { getCityIdByName, getAccomodationsById } from "../../services/api";
import { testing } from "../../controllers/dateAccomodation";
>>>>>>> Stashed changes

import { getCityIdByName, getAccomodationsById } from "../../services/api";
import axios from "axios";

<<<<<<< Updated upstream
import "./home.css";
=======
import dotenv from "dotenv"


const listaHospedagens = [
  {
    id: 1004415072,
    image: {
      name: "Milano Hotel",
      src:
        "https://exp.cdn-hotels.com/hotels/32000000/31360000/31356800/31356721/2426a1c5_l.jpg",
    },
    name: "Milano Hotel",
    price: 66.67,
    rating: 2.5,
  },
  {
    id: 619733984,
    image: {
      name: "Hotel Campolim",
      src:
        "https://exp.cdn-hotels.com/hotels/20000000/19340000/19335500/19335437/f2614801_l.jpg",
    },
    name: "Hotel Campolim",
    price: 72.51,
    rating: 2.5,
  },
  {
    id: 596103,
    image: {
      name: "Éden Park Hotel",
      src:
        "https://exp.cdn-hotels.com/hotels/16000000/15240000/15235200/15235126/dfbecea0_l.jpg",
    },
    name: "Éden Park Hotel",
    price: 109.23,
    rating: 3,
  },
  {
    id: 374566,
    image: {
      name: "Plaza Inn Trevo Sorocaba",
      src:
        "https://exp.cdn-hotels.com/hotels/5000000/4290000/4281900/4281833/74e589c6_l.jpg",
    },
    name: "Plaza Inn Trevo Sorocaba",
    price: 111.41,
    rating: 3,
  },
  {
    id: 619996768,
    image: {
      name: "Hotel Cardum",
      src:
        "https://exp.cdn-hotels.com/hotels/20000000/19350000/19343700/19343649/cb0c7c4e_l.jpg",
    },
    name: "Hotel Cardum",
    price: 121.9,
    rating: 3,
  },
];
>>>>>>> Stashed changes

const Home = () => {
  // um pouco de como buscar os dados da API
  const [data, setData] = useState([]);
  // teste pra mostrar a lista de acomodações ao clicar no botão submit
  const [showList, setShowList] = useState(false);
  // const [newCity, setNewCity] = useState("");

<<<<<<< Updated upstream
  async function handleSearch(obj) {
    // console.log(farofa);

    const cityId = await getCityIdByName(obj.city);
    const accomodationsList = await getAccomodationsById(cityId);
    setData(accomodationsList);
=======
  function finalPrice(days, perNight) {
    return days * perNight;
  }

  /**
   * CAOS
   */
  let autoComplete;
  var newCity;

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"] }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery, autoCompleteRef)
    );
  }

  async function handlePlaceSelect(updateQuery, autoCompleteRef) {
    console.log(autoComplete)
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    newCity = addressObject.address_components[0].long_name
    // setNewCity(query);
    console.log(addressObject.address_components[0].long_name)
  }

    function SearchLocationInput() {
      const [query, setQuery] = useState("");
      const autoCompleteRef = useRef(null);

      useEffect(() => {
        loadScript(
          // `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places&language=pt_BR`,
          `https://maps.googleapis.com/maps/api/js?key=AIzaSyCA_szvnsVf3nrqxMEkZFi54EcnMF9hces&libraries=places&language=pt_BR`,
          () => handleScriptLoad(setQuery, autoCompleteRef)
        );
      }, []);
      
      return (
        <div className="search-location-input">
          <input
            ref={autoCompleteRef}
            onChange={event => setQuery(event.target.value)}
            placeholder="Escreva o seu Destino"
            value={query}
          />
        </div>
      );
    }
  /**
   * FIM DO CAOS
   */

  async function handleSearch(obj) {
    // const cityId = await getCityIdByName(obj.city)
    console.log(newCity)
    const cityId = await getCityIdByName(newCity)
    console.log(newCity)
    const {
      entryDate,
      departureDate,
      unformattedEntryDate,
      unformattedDepartureDate,
    } = await obj;
    props.setCountOfDays(testing(unformattedEntryDate, unformattedDepartureDate));
    const count = testing(unformattedEntryDate, unformattedDepartureDate);
    props.setCountOfDays(count);
    const accomodationsList = await getAccomodationsById(cityId, entryDate, departureDate);
    props.setPrice(finalPrice(props.countOfDays, props.price.perNight));
    setData(accomodationsList); // accomodationsList
>>>>>>> Stashed changes
    setShowList(true);
  }

  function handleNatalia(batata) {
    console.log("IHA");
  }

  console.log("natalia", data);

  return (
    <div className="page-home">
      <Header />
<<<<<<< Updated upstream
      <SearchLocationInput onChange={() => null} />
      <Search onSearch={handleSearch} onNatalia={handleNatalia} />
      <main>
        {showList && <AccomodationsList data={data} />}
        <Link to="/accomodations-list">
          <strong>testa aeee</strong>
        </Link>
      </main>
=======
      <SearchLocationInput onSearch={handleSearch}/>
      <Search onSearch={handleSearch} />
      {showList && (
        <AccomodationsList
          data={data}
          setAccomodationId={props.setAccomodationId}
          setPrice={props.setPrice}
          total={props.total}
        />
      )}
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
