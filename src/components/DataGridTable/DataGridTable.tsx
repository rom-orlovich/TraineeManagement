import { useState } from "react";

import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import Card from "../UI/Card/Card";

import { localDate } from "../../helpers/AppVariables";

import {
  actionsDataGrid as actionsList,
  getDataGridMakeActions as getActions,
} from "./DataGridActions";
import { SxProps, Theme } from "@mui/material";
import { ActionsKindsColumns } from "./DataGridTypes";
import ST from "./DataGridTable.module.scss";
function DataGridTable({
  className,
  columns,
  heading,
  displayDate,
  rows,
  sx,
  actions,
}: propsType & {
  columns: GridColumns;
  rows: GridRowsProp;
  heading?: string;
  displayDate?: true;
  actions?: ActionsKindsColumns[];
  sx?: SxProps<Theme> | undefined;
}) {
  useState();
  const [rowsNew, setRowsNew] = useState(rows);
  const Actions = actions || [];
  return (
    <Card className={classNameMaker(ST.table_card, ST, className)}>
      <div className={classNameMaker(ST.heading_card)}>
        <h2> {heading ? heading : ""}</h2>
        {displayDate && <h2> {localDate}</h2>}
      </div>

      <DataGrid
        sx={sx}
        columns={[...columns, getActions(Actions, rowsNew, setRowsNew)]}
        rows={rowsNew}
      />
    </Card>
  );
}

export default DataGridTable;
