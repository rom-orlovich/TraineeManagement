import { GridColDef } from "@mui/x-data-grid";
import { localDate } from "../helpers/DatesHelpers";
import { OptionObj } from "../helpers/GlobalType";

import {
  Trainee,
  Task,
  Lead,
  typeIncomeExpense,
  paymentMethod,
  Income,
  Expense,
  ProductInterface,
  ProductNames,
  ExpanseName,
} from "./DummyDataType";

let idTrainees = 1,
  idTasks = 1,
  idLeads = 1,
  idIncome = 1,
  idExpense = 1;

export const createTrainee = (
  name: string,
  gender: "Male" | "Female" | "Other",
  tel: string,
  email: string,
  status: boolean
): Trainee => {
  idTrainees++;
  return {
    id: idTrainees,
    name,
    gender,
    tel,
    email,
    status,
  };
};

export const createLead = (
  date: string,

  name: string,
  tel: string,
  notes: string,
  source: string,
  status: boolean
): Lead => {
  idLeads++;
  return {
    id: idLeads,
    date,
    name,
    tel,
    notes,
    source,
    status,
  };
};
export const createTask = (
  hour: string,
  topic: string,
  status: boolean
): Task => {
  idTasks++;
  return {
    id: idTasks,
    hour,
    topic,
    status,
  };
};

export const createIncome = (
  nameClient: string,
  nameProduct: ProductNames,
  type: typeIncomeExpense,
  describe: string,
  paymentMethod: paymentMethod,
  quantity: number,
  price: number,
  date = localDate
): Income => {
  idIncome++;
  return {
    id: idIncome,
    date,
    nameClient,
    nameProduct,
    type,
    describe,
    paymentMethod,
    quantity,
    price,
  };
};

export const createExpense = (
  nameExpense: ExpanseName,
  paymentTo: string,
  type: typeIncomeExpense,
  describe: string,
  paymentMethod: paymentMethod,
  price: number,
  quantity: number,
  date = localDate
): Expense => {
  idExpense++;
  return {
    id: idExpense,
    date,
    nameExpense,
    paymentTo,
    type,
    describe,
    paymentMethod,
    price,
    quantity,
  };
};

export const createColField = <T>(
  field: keyof T extends string ? keyof T : string,
  headerName: string,
  flex = 1,
  hide = false
): GridColDef => {
  return {
    field,
    headerName,
    flex: flex,
    align: "center",
    headerAlign: "center",
    hide: hide,
  };
};
