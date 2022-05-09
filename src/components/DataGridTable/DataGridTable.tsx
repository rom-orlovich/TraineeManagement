import { useEffect, useState } from "react";

import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import Card from "../UI/Card/Card";

import {
  actionsDataGrid as actionsList,
  getDataGridMakeActions as getActions,
} from "./DataGridActions";
import { SxProps, Theme } from "@mui/material";
import { ActionsKindsColumns } from "./DataGridTypes";
import ST from "./DataGridTable.module.scss";
import { localDate } from "../../helpers/DatesHelpers";
import ToolBar from "./ToolBar";
import { useSelector } from "react-redux";

function DataGridTable({
  className,
  columns,
  heading,
  displayDate,
  rows,
  sx,
  actions,
  toolBar,
}: propsType & {
  columns: GridColumns;
  rows: GridRowsProp;
  heading?: string;
  displayDate?: true;
  actions?: ActionsKindsColumns[];
  sx?: SxProps<Theme> | undefined;
  toolBar?: boolean;
}) {
  const [rowsNew, setRowsNew] = useState(rows);
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    setRowsNew(rows);
  }, [rows]);
  const Actions = actions || [];

  return (
    <Card className={classNameMaker(ST.table_card, ST, className)}>
      <div className={classNameMaker(ST.heading_card)}>
        <h2> {heading ? heading : ""}</h2>
        {displayDate && <h2> {localDate}</h2>}
      </div>

      <DataGrid
        columns={[...columns, getActions(Actions, rowsNew, setRowsNew)]}
        disableColumnSelector={true}
        rows={rowsNew}
        components={{
          Toolbar: () => (toolBar ? <ToolBar /> : <></>),
        }}
      />
    </Card>
  );
}

export default DataGridTable;
