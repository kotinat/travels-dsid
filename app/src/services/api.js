import axios from "axios";

export const getCityIdByName = async (city) => {
  const result = await axios(
    "https://hotels4.p.rapidapi.com/locations/search",
    {
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_x_rapidapi_host,
        "x-rapidapi-key": process.env.REACT_APP_x_rapidapi_key,
      },
      params: {
        locale: "pt_BR",
        query: city,
      },
    }
  );
  console.log(result);

  return result.data.suggestions[0].entities[0].destinationId;
};

export const getAccomodationsById = async (
  cityId,
  entryDate,
  departureDate
) => {
  const result = await axios("https://hotels4.p.rapidapi.com/properties/list", {
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_x_rapidapi_host,
      "x-rapidapi-key": process.env.REACT_APP_x_rapidapi_key,
    },
    params: {
      locale: "pt_BR",
      destinationId: cityId,
      pageNumber: 1,
      checkIn: entryDate,
      checkOut: departureDate,
      pageSize: 20,
      adults1: 2,
      currency: "BRL",
      sortOrder: "BEST_SELLER",
    },
  });
  const parsedResult = result.data.data.body.searchResults.results.map(
    (item) => ({
      id: item.id,
      name: item.name,
      image: {
        src: item.thumbnailUrl,
        name: item.name,
      },
      rating: item.starRating,
      price: item.ratePlan.price.exactCurrent,
    })
  );

  console.log(parsedResult);

  return parsedResult;
};

export const getAccomodationDetailById = async (id) => {
  const result = await axios(
    "https://hotels4.p.rapidapi.com/properties/get-details",
    {
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_x_rapidapi_host,
        "x-rapidapi-key": process.env.REACT_APP_x_rapidapi_key,
      },
      params: {
        locale: "pt_BR",
        id: id,
      },
    }
  );
  const { data } = result.data;
  const { body } = data;
  const { name, starRating } = body.propertyDescription;
  const { latitude, longitude } = body.pdpHeader.hotelLocation.coordinates;

  const hospedagem = {
    name,
    rating: starRating,
    price: {
      perNight: body.propertyDescription.featuredPrice.currentPrice.plain,
      final: "",
    },
    amenities: body.overview.overviewSections[0].content,
    location: {
      latitude,
      longitude,
    },
  };
  console.log(hospedagem);
  return hospedagem;
};
