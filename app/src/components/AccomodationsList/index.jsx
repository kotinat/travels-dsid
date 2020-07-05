import React from "react";
import CardAccomodation from "../CardAccomodation";
import { Container, Typography, Grid } from "@material-ui/core";
import "./accomodation-list.css";

const AccomodationsList = (props) => {
  return (
    <Container maxWidth="sm" className="container-list" justify="center">
      <Grid justify="center">
        <Typography style={{marginBottom: "12px"}} variant="h6">Hospedagens para você</Typography>
        <ul>
          {props.data.map((accomodation, id) => (
            <li key={id}>
              <CardAccomodation
                name={accomodation.name}
                stars={accomodation.rating}
                price={accomodation.price}
                id={accomodation.id}
                src={accomodation.image.src}
                alt={accomodation.image.name}
                setAccomodationId={props.setAccomodationId}
                setAccomodationImg={props.setAccomodationImg}
                setPrice={props.setPrice}
                total={props.total}
              />
            </li>
          ))}
        </ul>
      </Grid>
    </Container>
  );
};

export default AccomodationsList;
