import { borderRadius } from "@mui/system";
import { GridColDef, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import { ChartData, ChartOptions, PieController } from "chart.js";
import { NavLink } from "react-router-dom";
import { Colors, Months } from "../helpers/AppVariables";
import { IdType } from "../helpers/GlobalType";
import { createTasks, createTrainee } from "./DummyDataFunction";
import { DataGrid, chartDataType, Tasks, Trainee } from "./DummyDataType";

export const FieldsLeads = ["date", "name", "tel", "notes", "source", "status"];
export const Lead = {
  id: "1st3scas",
  date: "12/12/2021",
  name: "sa",
  tel: "0543442133",
  email: "madma@280797.com",
  notes: "asdas asdad asd",
  source: "facebook",
  status: true,
};

export const leadsListOverview = [
  Lead,
  {
    id: "1sasas",
    date: "12/12/2023",
    name: "sasad",
    tel: "05434s133",
    email: "madma@280797.com",
    notes: "ad asd",
    source: "twitter",
    status: false,
  },
  {
    id: "1sscas",
    date: "12/12/2023",
    name: "sasad",
    tel: "05434s133",
    email: "madma@280797.com",
    notes: "ad asd",
    source: "twitter",
    status: false,
  },
  {
    id: "1sascas",
    date: "12/12/2023",
    name: "sasad",
    tel: "05434s133",
    email: "madma@280797.com",
    notes: "ad asd",
    source: "twitter",
    status: false,
  },
  {
    id: "1ssscas",
    date: "12/12/2023",
    name: "sasad",
    tel: "05434s133",
    email: "madma@280797.com",
    notes: "ad asd",
    source: "twitter",
    status: false,
  },
];

export const TasksData = [
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

export const DailyTask: DataGrid<Tasks> = {
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
          <NavLink
            style={{
              padding: "0.2rem",
              backgroundColor: `${Colors.blue[400]}`,
              borderRadius: "8px",
              textDecoration: "none",
              color: `${"white"}`,
            }}
            to={`userProfile/${parms.id}`}
          >
            {" "}
            {/*  */}Profile{" "}
          </NavLink>
        );
      },
    },
  ],
  rows: [
    createTrainee("reb", "054222222", "madasdasd@gmail.com", true),
    createTrainee("r", "05423222", "msd@gmail.com", true),
    createTrainee("msd", "2345123", "madaasdasd@gmail.com", true),
  ],
};

export const chartBarData = {
  data: {
    labels: ["may", "juny", "july"],
    datasets: [
      {
        label: "incomes",
        data: [4000, 5000, 6000],
        backgroundColor: ["green"],
      },
      {
        label: "outcome",
        data: [2000, 2000, 1000],
        backgroundColor: "red",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        title: { display: true, text: "Balance" },
        display: true,
      },
    },
  },
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
];
