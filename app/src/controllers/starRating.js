// import React from "react";
// import StarRateIcon from "@material-ui/icons/StarRate";

export const getStars = (starNumber) => {
  var result = "";
  for (var i = 0; i < starNumber; i++) {
    result = result.concat("✮");
  }
  return result;
};
