import React from "react";
import CardAccomodation from '../../components/CardAccomodation';

const data = [
  {
    image: "",
    name: "Brebles",
    stars: 2,
    price: 30,
  },
  {
    image: "",
    name: "Farofa",
    stars: 4,
    price: 80,
  },
];

const AccomodationsList = () => {
  return (
    <div>
      <h1>accomodations list</h1>
      <div>
        {data.map((accomodation) => (
          <CardAccomodation name={accomodation.name} stars={accomodation.stars} price={accomodation.price}/>
        ))}
      </div>
    </div>
  );
};

export default AccomodationsList;
