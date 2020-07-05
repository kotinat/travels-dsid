import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { getStars } from "../../controllers/starRating";
import Header from "../../components/Header";
import "./details.css";

// import { getAccomodationDetailById } from "../../services/api"; // comentar

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

const errorMessage = "Falha ao buscar dos dados. Por favor tente novamente.";

const Details = (props) => {
  const [showDetails, setShowDetails] = useState(true); // false
  // const [details, setDetails] = useState(); // comentar
  const [loading, setLoading] = useState(false);
  const position = () => [
    details.location.latitude,
    details.location.longitude,
  ];
  const [error, setError] = useState(false);

  // Chamada na API, comentado para deixar mockado
  // COMENTAR TUDO
  // async function handleSearchAccomodation(id) {
  //   try{
  //     const ansioso = await getAccomodationDetailById(id);
  //     setDetails(ansioso);
  //     setShowDetails(true);
  //     setLoading(false);
  //   } catch (err) {
  //     // alert(err)
  //     setError(true)
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

      {error && <Alert severity="error">{errorMessage}</Alert>}
      {loading && <CircularProgress color="secondary" />}
      {showDetails && (
        <div>
          <div>
            <Paper>
              <Typography variant="h4">{details.name}</Typography>
              <Typography variant="body1">
                {getStars(details.rating)}
              </Typography>
              <Typography variant="h5">
                <ul className="amenities-list">
                  Comodidades
                  {details.amenities.map((comodidade, id) => (
                    <Typography key={id}>
                      <li>
                        <CheckCircleIcon
                          className="circle-icon"
                          fontSize="small"
                        />
                        {comodidade}
                      </li>
                    </Typography>
                  ))}
                </ul>
              </Typography>

              <Typography variant="h6">{`${props.price}/noite`}</Typography>
              <Typography variant="h5">
                {`Total da estadia, ${props.total()}`}
              </Typography>
              <div>
                <img src={props.accomodationImg} />
              </div>
              <Button
                onClick={handlePickAccomodation}
                variant="contained"
                color="secondary"
              >
                Reservar
              </Button>
            </Paper>
          </div>

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
