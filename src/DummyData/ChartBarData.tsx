import { ChartOptions } from "chart.js";
import { Colors, Months } from "../helpers/AppVariables";
import { getThisMonth } from "../helpers/DatesHelpers";
import { chartDataType } from "./DummyDataType";

export const optionsChartBar: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    datalabels: { color: "black" },
    legend: {
      title: {
        display: true,

        font: { weight: "600", size: 18 },
        color: "black",
        text: "Trainees Movement",
      },
    },
  },
};
const setTextChartBarHeader = (textHeader: string) => {
  return {
    ...optionsChartBar.plugins,
    legend: {
      ...optionsChartBar.plugins?.legend,
      title: {
        ...optionsChartBar.plugins?.legend?.title,
        text: textHeader,
      },
    },
  };
};

const setOptionsScalesAndPlugins = (textHeader: string, yScaleText: string) => {
  return {
    scales: {
      y: {
        title: { display: true, text: yScaleText },
      },
    },
    plugins: {
      ...setTextChartBarHeader(textHeader),
    },
  };
};

export const chartsBarData: chartDataType<"bar">[] = [
  {
    name: "Trainees Movement",
    data: {
      labels: Months,
      datasets: [
        {
          label: "Joined",

          data: [2, 4, 0, 3, 9, 12, 4, 1, 2, 3, 1, 2],
          backgroundColor: Colors.green["A700"],

          minBarLength: 15,
        },
        {
          label: "Left",

          data: [-2, -1, -1, -2, -1, -3, -2, -1, -2, -2, -1, -2],
          backgroundColor: Colors.red["A400"],

          minBarLength: 15,
        },
        {
          label: "Total Trainees",

          data: [8, 11, 10, 10, 19, 28, 30, 30, 30, 31, 31, 31],

          backgroundColor: Colors.blue["A700"],

          minBarLength: 15,
        },
      ],
    },
    options: {
      ...optionsChartBar,

      scales: {
        y: {
          title: { display: true, text: "Trainees" },
        },
      },
    },
  },
  {
    name: "Leads Amount",
    data: {
      labels: Months,
      datasets: [
        {
          label: "New Leads",
          data: [5, 7, 6, 7, 9, 3, 3, 5, 9, 8, 5, 6],
          backgroundColor: Colors.blue["A700"],

          minBarLength: 12,
        },

        {
          label: "Handle",
          data: [3, 2, 2, 5, 6, 2, 1, 1, 7, 8, 1, 2],

          backgroundColor: Colors.green["A700"],

          minBarLength: 12,
        },
        {
          label: "Not Handle",
          data: [1, 1, 4, 2, 3, 1, 2, 4, 2, 0, 4, 4],

          backgroundColor: Colors.red["A400"],
          minBarLength: 12,
        },
      ],
    },
    options: {
      ...optionsChartBar,

      ...setOptionsScalesAndPlugins("Leads Movement", "Leads"),
    },
  },

  {
    name: "Balance Movement",
    data: {
      labels: getThisMonth,
      datasets: [
        {
          label: "Total balance",
          data: [2672, 4550, 2203, 3175],
          backgroundColor: Colors.blue["A700"],
        },
        {
          label: "Incomes",
          data: [1591, 1158, 1088, 1462],
          backgroundColor: Colors.green["A700"],
        },
        {
          label: "Expenses",
          data: [159, 158, 788, 662],
          backgroundColor: Colors.red["A400"],
        },
      ],
    },
    options: {
      ...optionsChartBar,

      ...setOptionsScalesAndPlugins("Balance Movement", "Balance"),
    },
  },

  {
    name: "Incomes Report",
    data: {
      labels: Months,
      datasets: [
        {
          label: "Training Plan",
          data: [639, 787, 831, 972, 901, 741, 500, 879, 764, 904, 855, 866],
          backgroundColor: Colors.green["A700"],

          minBarLength: 15,
        },
        {
          label: "Nutrition Plan",
          data: [664, 692, 672, 515, 548, 617, 410, 546, 435, 548, 511, 680],
          backgroundColor: Colors.red["A400"],

          minBarLength: 15,
        },
        {
          label: "Personal Training",

          data: [
            1106, 789, 700, 1178, 936, 1027, 1020, 929, 1156, 754, 917, 1023,
          ],

          backgroundColor: Colors.blue["A700"],

          minBarLength: 15,
        },
      ],
    },
    options: {
      ...optionsChartBar,

      ...setOptionsScalesAndPlugins("Incomes Report", "Incomes"),
    },
  },

  {
    name: "Expense Report",
    data: {
      labels: Months,
      datasets: [
        {
          label: "Learning",
          data: [
            -594, -576, -480, -610, -437, -519, -600, -506, -672, -469, -557,
            -684,
          ],
          backgroundColor: Colors.green["A700"],

          minBarLength: 15,
        },
        {
          label: "Insurance",
          data: [
            -1021, -859, -1188, -987, -1064, -1019, -1076, -950, -801, -857,
            -943, -908,
          ],
          backgroundColor: Colors.red["A400"],

          minBarLength: 15,
        },
        {
          label: "Equipment",

          data: [
            -953, -604, -858, -946, -907, -706, -624, -989, -922, -968, -749,
            -669,
          ],

          backgroundColor: Colors.blue["A700"],

          minBarLength: 15,
        },
      ],
    },
    options: {
      ...optionsChartBar,

      ...setOptionsScalesAndPlugins("Expenses Report", "Expenses"),
    },
  },
];
