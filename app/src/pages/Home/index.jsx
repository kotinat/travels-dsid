import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "../../components/Header";
import Search from "../../components/Search";
import AccomodationsList from "../../components/AccomodationsList";

import { getCityIdByName, getAccomodationsById } from "../../services/api";
import { testing } from "../../controllers/dateAccomodation";

import "./home.css";

// const listaHospedagens = [
//   {
//     id: 1004415072,
//     image: {
//       name: "Milano Hotel",
//       src:
//         "https://exp.cdn-hotels.com/hotels/32000000/31360000/31356800/31356721/2426a1c5_l.jpg",
//     },
//     name: "Milano Hotel",
//     price: 66.67,
//     rating: 2.5,
//   },
//   {
//     id: 619733984,
//     image: {
//       name: "Hotel Campolim",
//       src:
//         "https://exp.cdn-hotels.com/hotels/20000000/19340000/19335500/19335437/f2614801_l.jpg",
//     },
//     name: "Hotel Campolim",
//     price: 72.51,
//     rating: 2.5,
//   },
//   {
//     id: 596103,
//     image: {
//       name: "Éden Park Hotel",
//       src:
//         "https://exp.cdn-hotels.com/hotels/16000000/15240000/15235200/15235126/dfbecea0_l.jpg",
//     },
//     name: "Éden Park Hotel",
//     price: 109.23,
//     rating: 3,
//   },
//   {
//     id: 374566,
//     image: {
//       name: "Plaza Inn Trevo Sorocaba",
//       src:
//         "https://exp.cdn-hotels.com/hotels/5000000/4290000/4281900/4281833/74e589c6_l.jpg",
//     },
//     name: "Plaza Inn Trevo Sorocaba",
//     price: 111.41,
//     rating: 3,
//   },
//   {
//     id: 619996768,
//     image: {
//       name: "Hotel Cardum",
//       src:
//         "https://exp.cdn-hotels.com/hotels/20000000/19350000/19343700/19343649/cb0c7c4e_l.jpg",
//     },
//     name: "Hotel Cardum",
//     price: 121.9,
//     rating: 3,
//   },
// ];

const Home = (props) => {
  const [data, setData] = useState([]);
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);

  function finalPrice(days, perNight) {
    return days * perNight;
  }

  async function handleSearch(obj) {
    setLoading(true);
    const cityId = await getCityIdByName(obj.city); // comentar
    const {
      entryDate,
      departureDate,
      unformattedEntryDate,
      unformattedDepartureDate,
    } = await obj;
    // comentar abaixo
    props.setCountOfDays(
      testing(unformattedEntryDate, unformattedDepartureDate)
    );
    const count = testing(unformattedEntryDate, unformattedDepartureDate);
    props.setCountOfDays(count);
    // comentar abaixo
    const accomodationsList = await getAccomodationsById(
      cityId,
      entryDate,
      departureDate
    );
    props.setPrice(finalPrice(props.countOfDays, props.price.perNight));
    setData(accomodationsList); // listaHospedagens
    setShowList(true);
    setLoading(false);
  }

  return (
    <div className="page-home">
      <Header />
      <Search onSearch={handleSearch} />
      {loading && <CircularProgress color="secondary" />}
      {showList && (
        <AccomodationsList
          data={data}
          setAccomodationId={props.setAccomodationId}
          setPrice={props.setPrice}
          total={props.total}
        />
      )}
    </div>
  );
};

export default Home;
