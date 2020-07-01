import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Button, Paper, Typography } from "@material-ui/core";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./details.css";

// import { getAccomodationDetailById } from "../../services/api";

const details = {
  name: "Milano Hotel",
  rating: 2.5,
  price: {
    perNight: 67,
    final: 335,
  },
  amenities: [
    "29 quartos para não fumantes",
    "Serviço de arrumação (mediante solicitação)",
    "Bar/lounge",
    "Recepção 24 horas",
    "Ar-condicionado",
    "Um micro-ondas em uma área comum",
    "Lavanderia",
    "Jornais grátis no saguão",
    "TV na área comum",
    "Wi-Fi grátis",
  ],
  location: {
    latitude: -23.49742,
    longitude: -47.45506,
  },
};

function getStars(starNumber) {
  var result = "";
  for (var i = 0; i < starNumber; i++) {
    result = result.concat("✮");
  }
  return result;
}

const Details = (props) => {
  const [showDetails, setShowDetails] = useState(true); // false
  // const [details, setDetails] = useState();
  const position = () => [
    details.location.latitude,
    details.location.longitude,
  ];

  // Chamada na API, comentado para deixar mockado
  // async function handleSearchAccomodation(id) {
  //   const ansioso = await getAccomodationDetailById(id);
  //   setDetails(ansioso);
  //   setShowDetails(true);
  // }

  // Faz a chamada assim que o componente Details é renderizado
  // useEffect(() => {
  //   handleSearchAccomodation(props.accomodationId);
  // }, []);

  async function handlePickAccomodation(e) {
    e.preventDefault();
    props.setAccomodation(details);
    props.history.push("/register");
  }

  console.log(props);

  return (
    <div>
      <header>
        <span>
          <Link to="/">Voltar para a busca</Link>
        </span>
        <span>----|----</span>
        <span>
          <Link to="/register">Ir para o cadastro</Link>
        </span>
      </header>

      <h1>Detalhes</h1>
      {showDetails && (
        <div>
          <Paper>
            <Typography variant="h3">{details.name}</Typography>
            <Typography variant="body1">{getStars(details.rating)}</Typography>
            <Typography variant="h5">
              Comodidades
              {details.amenities.map((comodidade, id) => (
                <Typography key={id}>{comodidade}</Typography>
              ))}
            </Typography>
            <Typography variant="h6">
              {`${details.price.perNight}/noite`}
            </Typography>
            <Typography variant="h5">
              {`Total da estadia, ${details.price.final}`}
            </Typography>
            <Button
              onClick={handlePickAccomodation}
              variant="contained"
              color="secondary"
            >
              Choose me!
            </Button>
          </Paper>

          <div className="leaflet-container">
            <Map center={position()} zoom={15}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                height="200px"
              />
              <Marker position={position()}>
                <Popup>{details.name}</Popup>
              </Marker>
            </Map>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Details);
