import {
  expenseExample,
  incomeExample,
  Months,
  thisDay,
  totalExample,
} from "./AppVariables";
import { sumArray } from "./helperFunction";

const padStartWithZero = (str: string) => (str.length < 2 ? 0 + str : str);

export const getLocalDate = (date: Date, local = window.navigator.language) => {
  let [d, m, y] = date.toLocaleDateString(local).split(".");
  d = padStartWithZero(d);
  m = padStartWithZero(m);

  return d + "/" + m + "/" + y;
};
export const getLocalDateFromInput = (date: string) => {
  let [y, m, d] = date.split("-");
  d = padStartWithZero(d);
  m = padStartWithZero(m);
  return d + "/" + m + "/" + y;
};

export const getGlobalDate = (date: string) => {
  let [d, m, y] = date.includes(".") ? date.split(".") : date.split("/");

  d = padStartWithZero(d);
  m = padStartWithZero(m);
  return y + "-" + m + "-" + d;
};

export const localDate = getLocalDate(new Date());
export const globalDate = getGlobalDate(new Date().toLocaleDateString());

export const getFirstAndLastDateMonth = (
  year = new Date().getFullYear(),
  month = new Date().getMonth()
) => [new Date(year, month, 1), new Date(year, month + 1, 0)];

export const getLastDayInMonth = (date: Date) =>
  getFirstAndLastDateMonth(date.getFullYear(), date.getMonth())[1];

export const datesArray = (
  dateStart: Date | string,
  dateEnd: Date | string
) => {
  let cur =
    typeof dateStart === "object"
      ? dateStart
      : new Date(getGlobalDate(dateStart));
  let end =
    typeof dateEnd === "object" ? dateEnd : new Date(getGlobalDate(dateEnd));

  const res = [];
  while (cur <= end) {
    res.push(getLocalDate(cur));
    cur = new Date(cur.setDate(cur.getDate() + 1));
  }
  return res;
};

export const getThisMonth = datesArray(
  getFirstAndLastDateMonth()[0],
  getFirstAndLastDateMonth()[1]
);

export const getPointSliceThisWeek = (d = thisDay) => {
  let resDiv = d.getDate() / 7;

  return resDiv <= 1
    ? [0, 7]
    : 1 <= resDiv && resDiv <= 2
    ? [7, 14]
    : 2 <= resDiv && resDiv <= 3
    ? [14, 21]
    : [21, getLastDayInMonth(d).getDate()];
};
const newDateMake = (display: "Weeks" | "Months" | "Years", cur: Date) => {
  switch (display) {
    case "Weeks":
      return funWeeks(cur);

    case "Months":
      return funMonths(cur);

    case "Years":
      return funYears(cur);
  }
};

const funWeeks = (cur: Date) =>
  cur.getDate() + 7 > 28
    ? getLastDayInMonth(cur).getDate() + 1
    : cur.getDate() + 7;
const funMonths = (cur: Date) => cur.getMonth() + 1;
const funYears = (cur: Date) =>
  cur.getDate() + 7 > 28
    ? getLastDayInMonth(cur).getDate() + 1
    : cur.getDate() + 7;

export const getWeekPeriodBet2Dates = (
  total: number[],
  incomes: number[],
  expenses: number[],
  display: "Weeks" | "Months" | "Years",
  strLabels?: (...args: any[]) => string,
  start = new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
) => {
  let cur = start,
    newDate,
    T = [],
    I = [],
    E = [],
    labels = [];

  while (cur <= end) {
    let [first, last] = display === "Weeks" ? getPointSliceThisWeek(cur) : [];
    labels.push(strLabels ? strLabels(first, last, cur) : "");
    total && T.push(sumArray(total?.slice(first, last)));
    incomes && I.push(sumArray(incomes?.slice(first, last)));
    expenses && E.push(sumArray(expenses?.slice(first, last)));

    newDate = newDateMake(display, cur);

    cur = new Date(cur.setDate(newDate));
  }
  return { labels, total: T, incomes: I, expenses: E };
};

export const weeksDisplayLabels = (first: string, last: string, cur: Date) =>
  `${first + 1}-${last}/${cur.getMonth() + 1}/${cur.getFullYear()}`;

export const MonthDisplayLabels = (cur: Date) => `${Months[cur.getMonth()]}`;

console.log(
  getWeekPeriodBet2Dates(
    totalExample,
    incomeExample,
    expenseExample,
    "Weeks",
    weeksDisplayLabels,

    new Date(2021, 0, 1),
    new Date(2021, 1, 28)
  )
);

/// לבנות את החודשים ולהסתמך על הפונקצייה למעלה , צריך לכתוב פונקציה שבנונה מחזרות לתגיות, תנאי תנאי התקדמות ומקרה אחרון שיסיים את הלולאה
/// צריך לכתוב תנאי שיפעיל את ספירת החודשים ואת ספירת השנים
