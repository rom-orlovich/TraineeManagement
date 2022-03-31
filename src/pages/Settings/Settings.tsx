import React from "react";
import { Outlet } from "react-router";
import { UIComponentsExportMui } from "../../components/MUI/UIComponentsExport/UIComponentsExportMui";

import HeaderSettings from "./HeaderSettings/HeaderSettings";
import ST from "./Settings.module.scss";
const { Grid } = UIComponentsExportMui;

function Settings() {
  return (
    <Grid>
      <HeaderSettings />

      <Outlet />
    </Grid>
  );
}

export default Settings;
