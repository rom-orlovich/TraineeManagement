import { ChartOptions } from "chart.js";
import { Colors } from "../helpers/AppVariables";
import { chartDataType, Expense, Income } from "./DummyDataType";
import { ExpensesTable, IncomesTable } from "./TablesData";

export const optionsChartPie: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      font: {
        size: 15,
      },
      color: "white",
      formatter: (value) => {
        return ` ${value}%`;
      },
    },
    tooltip: {
      callbacks: {
        label: (context) =>
          ` ${context.label} ${context.dataset.label} is ${context.parsed}%`,
      },
    },
  },
};

export const dataPie: chartDataType<"pie">[] = [
  {
    name: "Ages Stats",
    data: {
      labels: ["8-16", "16-40", "40-60"],
      datasets: [
        {
          label: "Ages",
          data: [20, 60, 20],
          backgroundColor: [
            Colors.yellow["600"],
            Colors.blue["600"],
            Colors.red["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "Type Plan",
    data: {
      labels: ["Nutrition", "Training", "Other"],
      datasets: [
        {
          label: "Client Status",
          data: [60, 30, 10],
          backgroundColor: [
            Colors.indigo["600"],
            Colors.pink["600"],
            Colors.lightBlue["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },

  {
    name: "Period Training",
    data: {
      labels: ["0-3 Months", "3-6 Months", "6-12 Months", "1+ Years"],
      datasets: [
        {
          label: "Period",
          data: [47, 28, 12, 13],
          backgroundColor: [
            Colors.indigo["600"],
            Colors.pink["600"],
            Colors.lightBlue["600"],
            Colors.deepOrange["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },

  {
    name: "Areas",
    data: {
      labels: ["Kiryat Ono", "Tel-aviv", "Ramat Gan"],
      datasets: [
        {
          label: "Area",
          data: [40, 53, 7],
          backgroundColor: [
            Colors.deepOrange["600"],
            Colors.cyan["600"],
            Colors.purple["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },

  {
    name: "Genders",
    data: {
      labels: ["Male", "Female", "Other"],
      datasets: [
        {
          label: "Genders",
          data: [50, 40, 10],
          backgroundColor: [
            Colors.indigo["600"],
            Colors.pink["600"],
            Colors.lightBlue["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "Sources",
    data: {
      labels: ["Facebook", "Instagram", "Other"],
      datasets: [
        {
          label: "Source",
          data: [35, 43, 22],
          backgroundColor: [
            Colors.indigo["600"],
            Colors.pink["600"],
            Colors.lightBlue["600"],
          ],
        },
      ],
    },

    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "Monthly Incomes",
    data: {
      datasets: [
        {
          data: [50, 30, 20],
          label: "",
          backgroundColor: [
            Colors.indigo["600"],
            Colors.pink["600"],
            Colors.lightBlue["600"],
          ],
        },
      ],
      labels: IncomesTable.rows.map((el: Income) => el.nameProduct),
    },
    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "Monthly Expenses",
    data: {
      datasets: [
        {
          data: [43, 25, 32],
          label: "",
          backgroundColor: [
            Colors.deepOrange["600"],
            Colors.cyan["600"],
            Colors.purple["600"],
          ],
        },
      ],
      labels: ExpensesTable.rows.map((el: Expense) => el.nameExpense),
    },
    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "t",
    data: { datasets: [], labels: [] },
    options: {
      ...optionsChartPie,
    },
  },
];
