import { useState } from "react";

import { DataGrid, GridColumns, GridRowsProp } from "@mui/x-data-grid";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import Card from "../UI/Card/Card";

import { localDate } from "../../helpers/AppVariables";
import ST from "./DataGridTable.module.scss";
import {
  actionsDataGrid as actionsList,
  getDataGridMakeActions as getActions,
} from "./DataGridActions";
function DataGridTable({
  className,
  columns,
  heading,
  displayDate,
  rows,
}: propsType & {
  columns: GridColumns;
  rows: GridRowsProp;
  heading?: string;
  displayDate?: true;
}) {
  useState();
  const [rowsNew, setRowsNew] = useState(rows);

  return (
    <Card className={classNameMaker(ST, className)}>
      <div className={classNameMaker(ST.heading_card)}>
        <h2> {heading ? heading : ""}</h2>
        {displayDate && <h2> {localDate}</h2>}
      </div>

      <DataGrid
        columns={[...columns, getActions(actionsList, rowsNew, setRowsNew)]}
        rows={rowsNew}
      />
    </Card>
  );
}

export default DataGridTable;
