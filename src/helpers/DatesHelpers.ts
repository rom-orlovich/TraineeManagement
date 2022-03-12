import { Months, thisDay } from "./AppVariables";
import { TimeLinePeriodValueType } from "./GlobalType";
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
  getFirstAndLastDateMonth(date.getFullYear(), date.getMonth())[1].getDate();

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
    : [21, getLastDayInMonth(d)];
};

const datePeriodDataObj = (
  Display: TimeLinePeriodValueType,
  cur: Date,
  Total?: number[],
  Incomes?: number[],
  Expenses?: number[]
) => {
  const getPointToday = cur.getDate();
  const getPointsDays = getPointSliceThisWeek(cur);
  const getPointsWeeks = getPointSliceThisWeek(cur);
  const getPointsMonth = [0, getLastDayInMonth(cur)];
  const getPointsYears = [0, undefined];
  let total = Total || [],
    incomes = Incomes || [],
    expenses = Expenses || [];

  const objTimeLineData = {
    daily: {
      label: [getThisMonth[getPointToday]],
      newDate: new Date().setMonth(cur.getMonth() + 1),
      total: [total[getPointToday]],
      incomes: [incomes[getPointToday]],
      expenses: [expenses[getPointToday]],
    },
    weekly: {
      label: getThisMonth.slice(...getPointsDays),
      newDate: new Date().setMonth(cur.getMonth() + 1),
      total: total.slice(...getPointsDays),
      incomes: incomes.slice(...getPointsDays),
      expenses: expenses.slice(...getPointsDays),
    },
    monthly: {
      label: [
        `${getPointsWeeks[0] + 1}-${getPointsWeeks[1]}/${
          cur.getMonth() + 1
        }/${cur.getFullYear()}`,
      ],
      newDate: new Date().setDate(
        cur.getDate() + 7 > 28 ? getLastDayInMonth(cur) + 1 : cur.getDate() + 7
      ),
      total: [sumArray(total.slice(...getPointsWeeks))],
      expenses: [sumArray(expenses.slice(...getPointsWeeks))],
      incomes: [sumArray(incomes.slice(...getPointsWeeks))],
    },
    yearly: {
      label: [`${Months[cur.getMonth()]}`],
      newDate: new Date().setMonth(cur.getMonth() + 1),
      total: [sumArray(total.slice(...getPointsMonth))],
      expenses: [sumArray(expenses.slice(...getPointsMonth))],
      incomes: [sumArray(incomes.slice(...getPointsMonth))],
    },
    years: {
      label: [`${cur.getFullYear()}`],
      newDate: new Date().setFullYear(cur.getFullYear() + 1),
      total: [sumArray(total.slice(...getPointsYears))],
      expenses: [sumArray(expenses.slice(...getPointsYears))],
      incomes: [sumArray(incomes.slice(...getPointsYears))],
    },
  };

  return objTimeLineData[Display];
};
export const getPeriodDataBet2Dates = (
  total: number[],
  incomes: number[],
  expenses: number[],
  display: TimeLinePeriodValueType,

  start = new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  end = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
) => {
  let cur = start,
    T = [],
    I = [],
    E = [],
    labels = [];
  let objDate;

  while (cur <= end) {
    objDate = datePeriodDataObj(display, cur, total, incomes, expenses);

    labels.push(...objDate.label);
    T.push(...objDate.total);
    I.push(...objDate.incomes);
    E.push(...objDate.expenses);

    cur = new Date(objDate.newDate);
  }
  return { labels, total: T, incomes: I, expenses: E };
};

// console.log(
//   getPeriodDataBet2Dates(
//     totalExample.concat(totalExample),
//     incomeExample.concat(incomeExample),
//     expenseExample.concat(expenseExample),
//     "months",

//     new Date(2022, 0, 1),
//     new Date(2022, 1, 28)
//   )
// );