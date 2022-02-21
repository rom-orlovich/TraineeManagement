import { Button } from "@mui/material";
import {
  GridActionsCellItem,
  GridActionsColDef,
  GridColDef,
  GridRenderCellParams,
  GridRowProps,
  GridRowsProp,
} from "@mui/x-data-grid";
import { ChartData, ChartDataset, ChartOptions } from "chart.js";
import { AiFillDelete } from "react-icons/ai";

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
    flex: 1,
  },
];
export const rows = [
  { id: 1, hour: "12:00", topic: "training", status: "false" },
  { id: 2, hour: "15:00", topic: "eating", status: "false" },
  { id: 3, hour: "17:00", topic: "sleeping", status: "false" },
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
export const OverviewLineChart: {
  data: ChartData<"line", any[], any>;
  options?: ChartOptions<"line">;
}[] = [
  {
    data: {
      labels: ["may", "juny", "july"],
      datasets: [
        {
          label: "total trainee",
          data: [12, 17, 8],
          backgroundColor: "red",
          borderColor: "red",
          fill: false,
          tension: 0.1,
        },
        {
          label: "leads",
          data: [3, 8, 12],
          backgroundColor: "blue",
          borderColor: "blue",
          fill: false,
          tension: 0.1,
        },
        {
          label: "income",
          data: [2, -2, 8],
          backgroundColor: "green",
          borderColor: "green",
          fill: false,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  },
];

export type FieldsLeadType = typeof FieldsLeads;
export type LeadType = typeof Lead;
export type LeadsArrType = LeadType[];
