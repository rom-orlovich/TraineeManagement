import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { ChartData, ChartOptions, ChartType } from "chart.js";
import { IdType } from "../helpers/GlobalType";
import { FieldsLeads } from "./DummyData";
export type FieldsLeadType = typeof FieldsLeads;

export interface Trainee {
  id: IdType;
  gender: "Male" | "Female" | "Other";
  name: string;
  email: string;
  tel: string;
  status: boolean;
}

export interface Task {
  id: IdType;
  hour: string;
  topic: string;
  status: boolean;
}

export interface Lead {
  id: IdType;
  date: string;
  name: string;
  tel: string;
  notes: string;
  source: string;
  status: boolean;
}

export interface DataGrid<T> {
  columns: GridColDef[];

  rows: GridRowsProp & T[];
}

export type chartDataType<T extends ChartType> = {
  name: string;
  data: ChartData<T, number[], unknown>;
  options?: ChartOptions<T>;
};

// export type piecChartDataType<T extends ChartType> = {
//   name: string;
//   data: ChartData<T, number[], unknown>;
//   options?: ChartOptions<T>;
// };

export interface selectOption {
  id?: IdType;
  value: string | number;
  text: string;
}
export interface SelectOptions {
  name: string;
  options: selectOption[];
}
