import { Tooltip } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

import React from "react";
import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./ToolBar.module.scss";

function ToolBar() {
  return (
    <GridToolbar
      style={{ display: "flex", justifyContent: "space-around" }}
      className={classNameMaker(ST.toolBar)}
    ></GridToolbar>
  );
}

export default ToolBar;
