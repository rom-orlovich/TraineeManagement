import { Tooltip } from "@mui/material";
import {
  GridColumnsPanel,
  GridFilterMenuItem,
  GridFilterPanel,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import ST from "./ToolBar.module.scss";
import React from "react";
import { classNameMaker } from "../../helpers/helperFunction";

function ToolBar() {
  return (
    <GridToolbar
      style={{ display: "flex", justifyContent: "space-around" }}
      className={classNameMaker(ST.toolBar)}
    ></GridToolbar>
  );
}

export default ToolBar;
