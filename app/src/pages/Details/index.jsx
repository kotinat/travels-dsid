import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  Container,
  Box,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { getStars } from "../../controllers/starRating";
import Header from "../../components/Header";
import "./details.css";
const image =
  "https://exp.cdn-hotels.com/hotels/32000000/31360000/31356800/31356721/2426a1c5_l.jpg";

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

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  imageContainer: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(2),
    minWidth: theme.spacing(30),
    minHeight: theme.spacing(30),
    // maxWidth: theme.spacing(45),
    // maxHeight: theme.spacing(45),
    backgroundSize: "cover",
    backgroundPosition: "center center",
    boxShadow: "0px 8px 20px rgba(34, 35, 58, 0.3)",
  },
  items: {
    marginBottom: theme.spacing(1),
  },
  button: {
    borderRadius: theme.spacing(1),
  },
}));

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
  const classes = useStyles();

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

      {error && <Alert severity="error">{errorMessage}</Alert>}
      {loading && <CircularProgress color="secondary" />}
      {showDetails && (
        <div>
          <Grid container justify="center">
            {/* <Typography variant="h5">Detalhes da hospedagem</Typography> */}
            <Paper className={classes.paper} maxWidth="md">
              <div className="content">
                <Typography className={classes.items} variant="h4">
                  {details.name}
                </Typography>
                <Typography variant="body1">
                  <Box
                    className={classes.items}
                    fontWeight="fontWeightBold"
                    fontSize="h6.fontSize"
                  >
                    {getStars(details.rating)}
                  </Box>
                </Typography>
                <Typography variant="h6">
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
              </div>

              <div className="content">
                {/* <div>
                <img src={props.accomodationImg} />
              </div> */}
                <div
                  className={classes.imageContainer}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  {/* <img src="https://exp.cdn-hotels.com/hotels/32000000/31360000/31356800/31356721/2426a1c5_l.jpg" /> */}
                </div>
                <Typography
                  className={classes.items}
                  variant="h6"
                >{`${props.price}/noite`}</Typography>
                <Typography className={classes.items} variant="h5">
                  {`Total da estadia, ${props.total()}`}
                </Typography>
                <Button
                  className={classes.button}
                  onClick={handlePickAccomodation}
                  variant="contained"
                  color="primary"
                >
                  Reservar
                </Button>
              </div>
            </Paper>
          </Grid>

          {/* <Paper className={classes.paper} maxWidth="sm"> */}
          {/* <Grid container justify="center"> */}
          <div className="leaflet-wrapper">
            <div className="leaflet-container">
              <Map center={position()} zoom={15}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  // height="200px"
                />
                <Marker position={position()}>
                  <Popup>{details.name}</Popup>
                </Marker>
              </Map>
            </div>
          </div>
          {/* </Grid> */}

          {/* </Paper> */}
        </div>
      )}
    </Container>
  );
};

export default withRouter(Details);
