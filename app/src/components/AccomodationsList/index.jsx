import React from "react";
import CardAccomodation from "../CardAccomodation";
import Container from "@material-ui/core/Container";

const AccomodationsList = (props) => {
  return (
    <Container maxWidth="md">
      <h1>{`Resultados da busca`}</h1>
      <div>
        {props.data.map((accomodation, id) => (
          <CardAccomodation
            key={id}
            name={accomodation.name}
            stars={accomodation.rating}
            price={accomodation.price}
            id={accomodation.id}
            src={accomodation.image.src}
            alt={accomodation.image.name}
            setAccomodationId={props.setAccomodationId}
            setPrice={props.setPrice}
            total={props.total}
          />
        ))}
      </div>
    </Container>
  );
};

export default AccomodationsList;
