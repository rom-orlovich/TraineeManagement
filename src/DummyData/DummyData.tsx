import { borderRadius } from "@mui/system";
import { GridColDef, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import { ChartData, ChartOptions, PieController } from "chart.js";
import { Link, NavLink } from "react-router-dom";
import {
  Colors,
  expenseExample,
  incomeExample,
  Months,
  totalExample,
} from "../helpers/AppVariables";
import { getWeekPeriodBet2Dates, getThisMonth } from "../helpers/DatesHelpers";
import { IdType } from "../helpers/GlobalType";
import {} from "../helpers/helperFunction";
import {
  createColField,
  createLead,
  createTask,
  createTrainee,
} from "./DummyDataFunction";
import {
  DataGrid,
  chartDataType,
  Task,
  Trainee,
  Lead,
  SelectOptions,
} from "./DummyDataType";

export const FieldsLeads = ["date", "name", "tel", "notes", "source", "status"];
export const optionSelect: SelectOptions[] = [
  {
    name: "Period",
    options: [
      // { text: "select option", value: "" },
      { text: "last 3 Months", value: "3" },
      { text: "last 6 Months", value: "6" },
      { text: "last 12 Months", value: "12" },
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
      { text: "Days", value: "d" },
      { text: "Weeks", value: "w" },
      { text: "Months", value: "m" },
      { text: "Years", value: "y" },
    ],
  },
];
export const TaskData = [
  { id: "a", hour: "12:00", topic: "training", status: false },
  { id: "ab", hour: "12:00", topic: "training", status: false },
  { id: "asd", hour: "12:00", topic: "training", status: false },
  { id: "asd2", hour: "12:00", topic: "training", status: false },
  { id: "as123", hour: "12:00", topic: "training", status: false },
  { id: "b", hour: "12:00", topic: "training", status: false },
  { id: "c", hour: "12:00", topic: "training", status: false },
  { id: "f", hour: "12:00", topic: "training", status: false },
  { id: "r", hour: "12:00", topic: "training", status: false },
];

export const DailyTask: DataGrid<Task> = {
  columns: [
    { field: "id", hide: true },
    { field: "hour", headerName: "Hour", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 2 },
    {
      field: "status",
      headerName: "status",
      type: "boolean",
      flex: 1,
    },
  ],
  rows: [
    { id: 1, hour: "12:00", topic: "training", status: false },
    { id: 2, hour: "15:00", topic: "eating", status: false },
    { id: 3, hour: "17:00", topic: "sleeping", status: false },
  ],
};

export const TraineeTable: DataGrid<Trainee> = {
  columns: [
    { field: "id", hide: true },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "tel",
      headerName: "Tel",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "profile",
      headerName: "Profile",
      flex: 1,

      headerAlign: "center",
      align: "center",
      renderCell: (parms) => {
        return (
          <Link
            style={{
              padding: "0.2rem",
              backgroundColor: `${Colors.blue[400]}`,
              borderRadius: "8px",
              textDecoration: "none",
              color: `${"white"}`,
            }}
            to={`userProfile/${parms.id}`}
          >
            Profile
          </Link>
        );
      },
    },
  ],
  rows: [
    createTrainee("reb", "Male", "054222222", "madasdasd@gmail.com", true),
    createTrainee("r", "Female", "05423222", "msd@gmail.com", true),
    createTrainee("msd", "Female", "2345123", "madaasdasd@gmail.com", true),
  ],
};

export const LeadsTable: DataGrid<Lead> = {
  columns: [
    { field: "id", hide: true },
    { ...createColField("date", "Date", 1) },
    { ...createColField("name", "Name", 1) },
    { ...createColField("tel", "Tel", 1) },
    { ...createColField("notes", "Notes", 2), editable: true },
    { ...createColField("source", "Source", 1) },
    { ...createColField("status", "Done", 0.5), type: "boolean" },
  ],
  rows: [
    createLead(
      "12/02/2020",
      "rm",
      "0543131",
      "asdasd  asdasd",
      "instagram",
      false
    ),
    createLead(
      "12/12/2021",
      "rom",
      "054322131",
      "asdasd asdasd asdasd",
      "facebook",
      false
    ),
  ],
};

const optionsLineChart: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },
  },
};
export const OverviewLineChartData: chartDataType<"line">[] = [
  {
    name: "Trainees",
    data: {
      labels: Months.slice(0, 3),
      datasets: [
        {
          label: "Total trainees",
          data: [12, 17, 8],
          backgroundColor: Colors.purple[500],
          borderColor: Colors.purple[500],
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      ...optionsLineChart,

      scales: {
        ...optionsLineChart.scales,
        y: {
          title: {
            display: true,
            text: "Total trainees",
          },
        },
      },
    },
  },
  {
    name: "Leads",
    data: {
      labels: Months.slice(0, 3),
      datasets: [
        {
          label: "Leads",
          data: [3, 8, 12],
          backgroundColor: Colors.blue[700],
          borderColor: Colors.blue[700],
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      ...optionsLineChart,

      scales: {
        ...optionsLineChart.scales,
        y: {
          title: {
            display: true,
            text: "Leads",
          },
        },
      },
    },
  },

  {
    name: "Earning",

    data: {
      labels: Months.slice(0, 3),
      datasets: [
        {
          label: "Earning",
          data: [2000, 5000, 7000],
          backgroundColor: Colors.green[600],
          borderColor: Colors.green[600],
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      ...optionsLineChart,

      scales: {
        ...optionsLineChart.scales,
        y: {
          ticks: {
            display: true,
            callback: (value) => value + "$",
          },
          title: {
            display: true,
            text: "Earning",
          },
        },
      },
    },
  },
];

const optionsChartPie: ChartOptions<"pie"> = {
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
    name: "y",
    data: { datasets: [], labels: [] },
    options: {
      ...optionsChartPie,
    },
  },
  {
    name: "f",
    data: { datasets: [], labels: [] },
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

          data: [8, 11, 10, 11, 19, 28, 30, 30, 30, 31, 31, 31],

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
      scales: {
        y: {
          title: { display: true, text: "Leads" },
        },
      },
      plugins: {
        ...optionsChartBar.plugins,
        legend: {
          ...optionsChartBar.plugins?.legend,
          title: {
            ...optionsChartBar.plugins?.legend?.title,
            text: "Leads Movement",
          },
        },
      },
    },
  },
  {
    name: "Activities Movement",
    data: {
      labels: [],
      datasets: [],
    },
    options: {
      ...optionsChartBar,
      scales: {
        y: {
          title: { display: true, text: "Amount" },
        },
      },
      plugins: {
        ...optionsChartBar.plugins,
        legend: {
          ...optionsChartBar.plugins?.legend,
          title: {
            ...optionsChartBar.plugins?.legend?.title,
            text: "Activities Movement",
          },
        },
      },
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
      scales: {
        y: {
          title: { display: true, text: "Balance" },
        },
      },
      plugins: {
        ...optionsChartBar.plugins,
        legend: {
          ...optionsChartBar.plugins?.legend,
          title: {
            ...optionsChartBar.plugins?.legend?.title,
            text: "Balance Movement",
          },
        },
      },
    },
  },
];

export const dataProvider = {
  trainees: {
    table: TraineeTable,
    chartPie: dataPie.slice(0, 3),
    chartBar: chartsBarData[0],
    chartLine: OverviewLineChartData[0],
  },
  leads: {
    table: LeadsTable,
    chartPie: dataPie.slice(3, 6),
    chartBar: chartsBarData[1],
    chartLine: OverviewLineChartData[1],
  },

  activities: {
    chartPie: dataPie.slice(6, 9),
    chartBar: chartsBarData[2],
    chartLine: OverviewLineChartData[2],
  },

  Balance: {
    chartBar: chartsBarData[3],
  },
};

export const datesValue = getThisMonth.map((el, i) => {
  return {
    id: el,
    date: el,
    total: totalExample[i],
    income: incomeExample[i],
    expense: expenseExample[i],
  };
});
