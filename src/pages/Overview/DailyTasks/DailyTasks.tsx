import React, { useCallback, useState } from "react";
import { columns, rows } from "../../../DummyData/DummyData";

import Card from "../../../components/UI/Card/Card";
import { iconsLinks } from "../../../style/icons/icons";
import {
  DataGrid,
  GridActionsCellItem,
  GridActionsColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";

import ST from "./DailyTasks.module.scss";
const { MdOutlineDownloadDone, AiFillDelete } = iconsLinks;
function TodayTasks({ className }: propsType) {
  const [rowsNew, setRowsNew] = useState(rows);

  const clickDone = useCallback(
    (
      parma: GridRowParams<{
        [key: string]: any;
      }>
    ) => {
      let cur = rowsNew.find((el) => el.id === parma.id);
      if (parma.row.status === "false")
        setRowsNew((pre) => [
          ...pre.filter((el) => el.id !== parma.id),
          { ...cur!, status: "done" },
        ]);
    },
    []
  );

  const clickDelete = useCallback(
    (
      parma: GridRowParams<{
        [key: string]: any;
      }>
    ) => {
      if (parma.row.status === "done")
        setRowsNew((pre) => [...pre.filter((el) => el.id !== parma.id)]);
    },
    []
  );
  const actions: GridActionsColDef = {
    field: "actions",
    type: "actions",
    getActions: (parma) => [
      <GridActionsCellItem
        label="confirm"
        onClick={() => clickDone(parma)}
        icon={
          <MdOutlineDownloadDone
            size={25}
            color="green"
          ></MdOutlineDownloadDone>
        }
      />,
      <GridActionsCellItem
        label="delete"
        icon={<AiFillDelete></AiFillDelete>}
        onClick={() => {
          clickDelete(parma);
        }}
      ></GridActionsCellItem>,
    ],
  };
  return (
    <Card className={classNameMaker(ST, className)}>
      <div className={classNameMaker(ST.heading_card)}>
        <h2> Daily Tasks</h2>
        <h2> 12/12/22</h2>
      </div>

      <DataGrid columns={[...columns, actions]} rows={rowsNew} />
    </Card>
  );
}

export default TodayTasks;
