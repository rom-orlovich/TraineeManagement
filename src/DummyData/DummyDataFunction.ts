import { GridColDef } from "@mui/x-data-grid";
import { IdType } from "../helpers/GlobalType";
import { DataGrid, Trainee, Tasks } from "./DummyDataType";
// export type RowDataGrid=Pick<DataGrid<Trainee>,"rows">["rows"]
let idTrainee = 1,
  idTasks = 1;

export const createTrainee = (
  name: string,
  tel: string,
  email: string,

  status: boolean
): Trainee => {
  idTrainee++;
  return {
    id: idTrainee,
    name: name,
    tel: tel,

    email: email,
    status: status,
  };
};

export const createTasks = (
  id: IdType,
  hour: string,
  topic: string,
  status: boolean
) => {
  idTasks++;
  return {
    id: idTasks,
    hour,
    topic: topic,
    status: status,
  };
};
