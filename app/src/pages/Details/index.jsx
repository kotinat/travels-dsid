import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
} from "@material-ui/core";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Header from "../../components/Header";
import "./details.css";

// import { getAccomodationDetailById } from "../../services/api"; // comentar

import { getStars } from "../../controllers/starRating";

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

const Details = (props) => {
  const [showDetails, setShowDetails] = useState(true); // false
  // const [details, setDetails] = useState(); // comentar
  const [loading, setLoading] = useState(false);
  const position = () => [
    details.location.latitude,
    details.location.longitude,
  ];

  // Chamada na API, comentado para deixar mockado
  // COMENTAR TUDO
  // async function handleSearchAccomodation(id) {
  //   try{
  //     const ansioso = await getAccomodationDetailById(id);
  //     setDetails(ansioso);
  //     setShowDetails(true);
  //     setLoading(false);
  //   } catch (err) {
  //     alert(err)
  //     setLoading(false);
  //     props.history.push("/");
  //     console.log(err)
  //   }
  // }

  // Faz a chamada assim que o componente Details é renderizado
  useEffect(() => {
    setLoading(true);
    // handleSearchAccomodation(props.accomodationId); // comentar
    props.setPrice(props.price);
    setLoading(false);
  }, []);

  async function handlePickAccomodation(e) {
    e.preventDefault();
    props.setAccomodation(details);
    props.history.push("/register");
  }

  return (
    <Container>
      <Header
        back={"/"}
        showBack={true}
        foward={"/register"}
        showFoward={true}
      />

      <Typography variant="h4">Detalhes da hospedagem</Typography>
      {loading && <CircularProgress color="secondary" />}
      {showDetails && (
        <div>
          <Paper>
            <Typography variant="h4">{details.name}</Typography>
            <Typography variant="body1">{getStars(details.rating)}</Typography>
            <Typography variant="h5">
              Comodidades
              {details.amenities.map((comodidade, id) => (
                <Typography key={id}>{comodidade}</Typography>
              ))}
            </Typography>
            <Typography variant="h6">{`${props.price}/noite`}</Typography>
            <Typography variant="h5">
              {`Total da estadia, ${props.total()}`}
            </Typography>
            <Button
              onClick={handlePickAccomodation}
              variant="contained"
              color="secondary"
            >
              Reservar
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
    </Container>
  );
};

export default withRouter(Details);
