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

import {} from "../helpers/helperFunction";
import { chartsBarData } from "./ChartBarData";
import { OverviewLineChartData } from "./ChartLineData";
import { dataPie } from "./ChartPieData";
import {
  createColField,
  createExpense,
  createIncome,
  createLead,
  createTrainee,
} from "./DummyDataFunction";
import {
  DataGrid,
  chartDataType,
  Task,
  Trainee,
  Lead,
  SelectOptions,
  Income,
  Expense,
  SelectOption,
} from "./DummyDataType";
import {
  ExpensesTable,
  IncomesTable,
  LeadsTable,
  TraineeTable,
} from "./TablesData";

export const FieldsLeads = ["date", "name", "tel", "notes", "source", "status"];
export const optionSelect = [
  {
    name: "Period",
    options: [
      { text: "Last 3 Months", value: "3" },
      { text: "Last 6 Months", value: "6" },
      { text: "Last 12 Months", value: "12" },
    ],
  },

  {
    name: "Type Data",
    options: [
      { text: "Trainees", value: "trainees" },
      { text: "Leads", value: "leads" },
      { text: "Activities", value: "activities" },
    ],
  },
  {
    name: "Type Period",
    options: [
      { text: "Daily", value: "daily" },
      { text: "Weekly", value: "weekly" },
      { text: "Monthly", value: "monthly" },
      { text: "Yearly", value: "yearly" },
      { text: "Years", value: "years" },
    ],
  },
  {
    name: "Display activities mode",
    options: [
      { text: "Incomes", value: "incomes" },
      { text: "Expenses", value: "expenses" },
    ],
  },
];

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
