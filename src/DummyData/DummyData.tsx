import { ChartOptions } from "chart.js";
import { Link } from "react-router-dom";
import {
  Colors,
  expenseExample,
  incomeExample,
  Months,
  totalExample,
} from "../helpers/AppVariables";
import { getThisMonth } from "../helpers/DatesHelpers";
import { OptionObj, OptionObjWithPrice } from "../helpers/GlobalType";

import { createNewSelectOptionsArray } from "../helpers/helperFunction";
import { chartsBarData } from "./ChartBarData";
import { OverviewLineChartData } from "./ChartLineData";
import { dataPie } from "./ChartPieData";
import { SelectOptions } from "./DummyDataType";

import {
  ExpensesTable,
  IncomesTable,
  LeadsTable,
  TraineeTable,
} from "./TablesData";

export const FieldsLeads = ["date", "name", "tel", "notes", "source", "status"];
export const expensesListPrice: OptionObjWithPrice[] = [
  { id: 1, name: "Weight", value: "weight", price: 200 },
  { id: 2, name: "Rent", value: "rent", price: 2100 },
  { id: 3, name: "Task", value: "tasks", price: 500 },
];
export const productsListPrice: OptionObjWithPrice[] = [
  { id: 1, name: "Nutrition", value: "nutrition", price: 200 },
  { id: 2, name: "Training Plan", value: "trainingPlan", price: 100 },
  { id: 3, name: "Personal Training", value: "personalTraining", price: 150 },
];
export const sourcesList: OptionObj[] = [
  { id: 1, name: "Facebook", value: "facebook" },
  { id: 2, name: "Instagram", value: "instagram" },
  { id: 3, name: "Twitter", value: "twitter" },
  { id: 4, name: "Google", value: "google" },
];

export const optionSelect: SelectOptions[] = [
  {
    name: "Period",
    options: [
      { label: "Last 3 Months", value: "3" },
      { label: "Last 6 Months", value: "6" },
      { label: "Last 12 Months", value: "12" },
    ],
  },

  {
    name: "Page Data",
    options: [
      { label: "Trainees", value: "trainees" },
      { label: "Leads", value: "leads" },
      { label: "Activities", value: "activities" },
    ],
  },
  {
    name: "TimeLine Display",
    options: [
      { label: "Daily", value: "daily" },
      { label: "Weekly", value: "weekly" },
      { label: "Monthly", value: "monthly" },
      { label: "Yearly", value: "yearly" },
      { label: "Years", value: "years" },
    ],
  },
  {
    name: "Display activities mode",
    options: [
      { label: "Incomes", value: "incomes" },
      { label: "Expenses", value: "expenses" },
    ],
  },
  {
    name: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },

  {
    name: "Products",
    options: createNewSelectOptionsArray(productsListPrice),
  },
  {
    name: "Source",

    options: createNewSelectOptionsArray(sourcesList),
  },

  {
    name: "Products",

    options: [
      { label: "Nutrition", value: "nutrition" },
      { label: "Training Plan", value: "trainingPlan" },
      { label: "Personal Training", value: "personalTraining" },
    ],
  },
  {
    name: "Payment Type",

    options: [
      { label: "One Time", value: "oneTime" },
      { label: "Monthly", value: "monthly" },
    ],
  },
  {
    name: "Payment Methods",

    options: [
      { label: "Bank Transfer", value: "bankTransfer" },
      { label: "Bit", value: "bit" },
      { label: "Cash", value: "cash" },
      { label: "Other", value: "other" },
    ],
  },

  {
    name: "Expenses",

    options: createNewSelectOptionsArray(expensesListPrice),
  },
  {
    name: "select Form",
    options: [
      { label: "Income", value: "income" },
      { label: "Expense", value: "expense" },
    ],
  },
  {
    name: "Option Edit",
    options: [
      { label: "Products", value: "products" },
      { label: "Expenses", value: "expenses" },
      { label: "Sources", value: "sources" },
    ],
  },
  ,
] as SelectOptions[];

export const dataProvider = {
  trainees: {
    table: TraineeTable,
    chartPie: dataPie.slice(0, 3),
    chartBar: chartsBarData[0],
    chartLine: OverviewLineChartData[0],
    cardData: [],
  },
  leads: {
    table: LeadsTable,
    chartPie: dataPie.slice(3, 6),
    chartBar: chartsBarData[1],
    chartLine: OverviewLineChartData[1],
    cardData: [],
  },
  balance: {
    chartBar: chartsBarData[2],
    cardData: [],
  },
  activities: {
    table: [IncomesTable, ExpensesTable],
    incomes: {
      chartBar: chartsBarData[3],
      chartPie: [dataPie[6]],
      cardData: [
        {
          id: 1,
          heading: "Monthly Incomes ",
          text: 1200 + "", // לחשב מתוך הכנסות החודשיות
        },
        {
          id: 2,
          heading: "One-Time Incomes ",
          text: 700 + "", // לחשב מתוך הכנסות החד פעמיות
        },
      ],
    },
    expenses: {
      chartBar: chartsBarData[4],
      chartPie: [dataPie[7]],
      cardData: [
        {
          id: 1,
          heading: "Monthly Expense ",
          text: 1200 + "", // לחשב מתוך הכנסות החודשיות
        },
        {
          id: 2,
          heading: "One-Time Expense ",
          text: 700 + "", // לחשב מתוך הכנסות החד פעמיות
        },
      ],
    },
    chartLine: OverviewLineChartData[2],
  },
};
//חשוב
export const datesValue = getThisMonth.map((el, i) => {
  return {
    id: el,
    date: el,
    total: totalExample[i],
    income: incomeExample[i],
    expense: expenseExample[i],
  };
});
