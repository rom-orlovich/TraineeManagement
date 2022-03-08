import { colors } from "@mui/material";
import { getLocalDate, getGlobalDate } from "./DatesHelpers";

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

export const weekYear = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48,
];

export const thisDay = new Date();

const localTimeAndDate = new Date().toLocaleString().trim().split(",");
export const localString = window.navigator.language;
export const totalExample = [
  2844, 2599, 2569, 2039, 2944, 2452, 2034, 2775, 2452, 2700, 2418, 2942, 2395,
  2142, 2870, 2910, 2973, 2857, 2791, 2789, 2950, 2662, 2497, 2435, 2925, 2146,
  2832, 2824, 2059, 2103, 2066,
];
export const incomeExample = [
  1455, 1180, 1859, 1602, 1615, 1369, 1718, 1846, 1007, 1310, 1469, 1607, 1516,
  1814, 1221, 1136, 1733, 1581, 1725, 1246, 1844, 1708, 1920, 1499, 1598, 1466,
  1896, 1260, 1682, 1552, 1948,
];

export const expenseExample = [
  1008, 1031, 1063, 1095, 1037, 1173, 1036, 1153, 1089, 1094, 1006, 1000, 1145,
  1171, 1136, 1075, 1150, 1169, 1172, 1004, 1116, 1071, 1021, 1166, 1177, 1185,
  1090, 1042, 1064, 1027, 1082,
];
// console.log(arrayRandom(1000, 1200, getThisMonth.length));
