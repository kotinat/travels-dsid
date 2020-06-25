import React from "react";
import CardAccomodation from "../../components/CardAccomodation";

const AccomodationsList = (props) => {
  return (
    <div>
      <h1>accomodations list</h1>
      <div>
        {props.data.map((accomodation, id) => (
          <CardAccomodation
            key={id}
            name={accomodation.name}
            stars={accomodation.rating}
            price={accomodation.price}
            id={accomodation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AccomodationsList;
