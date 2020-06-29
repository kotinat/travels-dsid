import React from "react";

import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import './details.css'

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

const Details = () => {
  const position = [details.location.latitude, details.location.longitude];

  return (
    <div>
      <Link to="/">Voltar para a busca</Link>
      <div>--------------------------</div>
      <Link to="/register">Ir para o cadastro</Link>

      <h1>Detalhes</h1>
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
      </Paper>

      <div className="leaflet-container">
        <Map center={position} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            height="200px"
          />
          <Marker position={position}>
            <Popup>
              {details.name}
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default Details;
