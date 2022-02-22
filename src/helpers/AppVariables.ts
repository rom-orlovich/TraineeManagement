import { colors } from "@mui/material";

export const Colors = colors;
export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log();
const localTimeAndDate = new Date(Date.now())
  .toLocaleString()
  .trim()
  .split(",");
export const localDate = localTimeAndDate[0].replaceAll(".", "/");
export const localTime = localTimeAndDate[1];

console.log();
// export const getLocalCurrency=(value:number)=>{value.toLocaleString(navigator.language);}
