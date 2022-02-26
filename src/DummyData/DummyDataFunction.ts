import { GridColDef } from "@mui/x-data-grid";
import { IdType } from "../helpers/GlobalType";
import { DataGrid, Trainee, Task, Lead } from "./DummyDataType";
// export type RowDataGrid=Pick<DataGrid<Trainee>,"rows">["rows"]
let idTrainees = 1,
  idTasks = 1,
  idLeads = 1;

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

export const createColField = (
  field: string,
  headerName: string,
  flex = 1
): GridColDef => {
  return {
    field,
    headerName,
    flex: flex,
    align: "center",
    headerAlign: "center",
  };
};
