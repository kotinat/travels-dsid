const dateformat = require("dateformat");

export const transformDate = (date) => { // async
  try {
    date = dateformat(date, "yyyy-mm-dd");
    console.log(date);
    return date;
  } catch (err) {
    console.log(err);
  }
};

// export const testing = async () => {
//   var date1 = new Date("01/05/2020");

//   var date2 = new Date("01/20/2020");

//   var diffInTime = date2.getTime() - date1.getTime();

//   var diffInDays = diffInTime / (1000 * 3600 * 24);

//   console.log(diffInDays);

//   return diffInDays;
// };

// async function test() {
//   var wtf = await testing();

//   console.log(wtf);
// }
// test();
