import React from "react";
import CardAccomodation from "../../components/CardAccomodation";

const AccomodationsList = (props) => {
  return (
    <div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default AccomodationsList;
