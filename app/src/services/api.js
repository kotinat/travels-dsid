import axios from "axios";

export const getCityIdByName = async (city) => {
  const result = await axios(
    "https://hotels4.p.rapidapi.com/locations/search",
    {
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "d5950d8e02mshdd95fe25e26b86fp1d723ejsn923735e66e08",
      },
      params: {
        locale: "pt_BR",
        query: city,
      },
    }
  );

  return result.data.suggestions[0].entities[0].destinationId;
};

export const getAccomodationsById = async (cityId) => {
  const result = await axios("https://hotels4.p.rapidapi.com/properties/list", {
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": "d5950d8e02mshdd95fe25e26b86fp1d723ejsn923735e66e08",
    },
    params: {
      locale: "pt_BR",
      destinationId: cityId,
      pageNumber: 1,
      // aqui vem o entryDate
      checkIn: "2020-07-27",
      // aqui vem o departureDate
      checkOut: "2020-07-30",
      pageSize: 5,
      adults1: 2,
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

  // console.log(parsedResult);

  return parsedResult;
};

export const getAccomodationDetailById = async (id) => {
  const result = await axios(
    "https://hotels4.p.rapidapi.com/properties/get-details",
    {
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "d5950d8e02mshdd95fe25e26b86fp1d723ejsn923735e66e08",
      },
      params: {
        locale: "pt_BR",
        id: id,
        checkIn: "2020-06-25",
        checkOut: "2020-06-27",
        adults1: 2,
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
  // console.log(hospedagem)
  return hospedagem;
};
