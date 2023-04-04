const addDays = require("date-fns/addDays");
const getAfterD = (d) => {
  let N_date = addDays(new Date(2020, 7, 22), d);
  return `${N_date.getDate()}-${N_date.getMonth() + 1}-${N_date.getFullYear()}`;
};

module.exports = getAfterD;
