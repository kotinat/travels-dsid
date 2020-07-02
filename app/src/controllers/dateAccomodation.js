const dateformat = require("dateformat");

export const transformDate = (date) => {
  try {
    date = dateformat(date, "yyyy-mm-dd");
    // console.log(date);
    return date;
  } catch (err) {
    console.log(err);
  }
};

export const testing = (date1, date2) => {
  var diffInTime = date2.getTime() - date1.getTime();

  var diffInDays = diffInTime / (1000 * 3600 * 24);

  var parsedDiffInDays = Math.ceil(diffInDays); // integer

  // console.log(parsedDiffInDays);

  return parsedDiffInDays;
};
