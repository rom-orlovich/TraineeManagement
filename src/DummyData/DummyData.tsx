import { GridColDef } from "@mui/x-data-grid";
import { ChartData, ChartOptions } from "chart.js";
import { Colors, Months } from "../helpers/AppVariables";

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
export const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "hour", headerName: "Hour", flex: 1 },
  { field: "topic", headerName: "Topic", flex: 2 },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    flex: 1,
  },
];
export const rows = [
  { id: 1, hour: "12:00", topic: "training", status: false },
  { id: 2, hour: "15:00", topic: "eating", status: false },
  { id: 3, hour: "17:00", topic: "sleeping", status: false },
];

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

const options: ChartOptions<"line"> = {
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
export const OverviewLineChartData: LineChartType[] = [
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
      ...options,

      scales: {
        ...options.scales,
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
      ...options,

      scales: {
        ...options.scales,
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
      ...options,

      scales: {
        ...options.scales,
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
export type LineChartType = {
  name: string;
  data: ChartData<"line", number[], unknown>;
  options?: ChartOptions<"line">;
};

export type FieldsLeadType = typeof FieldsLeads;
export type LeadType = typeof Lead;
export type LeadsArrType = LeadType[];

// data={{
//   labels: [...OverviewLineChart[0]!.data!.labels!],
//   datasets: [
//     ...OverviewLineChart[0].data.datasets,
//     ...OverviewLineChart[1].data.datasets,
//   ],
// }}
