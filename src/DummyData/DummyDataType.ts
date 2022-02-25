import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { ChartData, ChartOptions, ChartType } from "chart.js";
import { IdType } from "../helpers/GlobalType";
import { FieldsLeads, Lead } from "./DummyData";
export type FieldsLeadType = typeof FieldsLeads;
export type LeadType = typeof Lead;
export type LeadsArrType = LeadType[];
export interface Trainee {
  id: IdType;
  name: string;
  email: string;
  tel: string;
  status: boolean;
}

export interface Tasks {
  id: number;
  hour: string;
  topic: string;
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
