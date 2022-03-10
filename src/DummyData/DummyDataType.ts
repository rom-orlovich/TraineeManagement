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
export interface ProdutsAndExpanse<T extends string> {
  name: T;
  price: number;
}

export interface ProductInterface
  extends ProdutsAndExpanse<
    | "Training plan"
    | "Nutrition plan"
    | "Consultation session"
    | "Personal Training"
    | "Other"
  > {}

export interface ExpenseInterface
  extends ProdutsAndExpanse<
    "Learning" | "Rent" | "Equipment" | "Insurance" | "Other"
  > {}

export type ProductNames = ProductInterface["name"];
export type ExpanseName = ExpenseInterface["name"];
export type paymentMethod = "Credit Card" | "Bank Transfer" | "Cash" | "Other";
export type typeIncomeExpense = "One-Time" | "Monthly";
export interface IncomeExpense {
  id: IdType;
  date: string;
  type: typeIncomeExpense;
  describe: string;
  paymentMethod: paymentMethod;
  price: number;
}
export interface Income extends IncomeExpense {
  nameClient: string;
  nameProduct: ProductNames;
}

export interface Expense extends IncomeExpense {
  paymentTo: string;
  nameExpense: ExpanseName;
  quantity: number;
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

export interface SelectOption {
  id?: IdType;
  value: string | number;
  text: string;
}
export type ValueSelectOption<T> = SelectOption["value"];

export interface SelectOptions {
  name: string;
  options: SelectOption[];
}

export interface cardData {
  id: number;
  heading: string;
  text: string;
}
