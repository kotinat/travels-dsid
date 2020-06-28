import React from "react";

// import { getAccomodationDetailById } from "../../services/api";

const Details = (props) => {
  // function handleDetails() {
  //   props.teste({name: props.name})
  // }
  // function handleDetails() {
  //   props.accomodationDetails({
  //     name: props.name,
  //     rating: props.rating
  //     // price,
  //   });
  // }

  // async function handleTest() {
  //   const ansioso = await getAccomodationDetailById(props.id);
  //   setDetails(ansioso);
  // }

  console.log("Hospedagem: ", props);
  return (
    <div>
      <h1>Detalhes</h1>
      {/* <button onClick={handleDetails}>show details</button> */}
      {props.map((item, k) => (
        <p key={k}>{item}</p>
      ))}
    </div>
  );
};

export default Details;
