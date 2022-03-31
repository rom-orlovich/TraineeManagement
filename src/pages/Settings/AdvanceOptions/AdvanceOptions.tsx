import React from "react";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import OptionsAdding from "./OptionsAdding/OptionsAdding";
const { Grid } = UIComponentsExportMui;
function AdvanceOptions() {
  return (
    <Grid container flexDirection="column" paddingLeft="4rem">
      <Grid container item md={12} minHeight="4rem">
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
      </Grid>
      <Grid container item md={12} minHeight="4rem">
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
      </Grid>
      <OptionsAdding />
      <Grid container item md={12} minHeight="4rem">
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </Grid>
  );
}

export default AdvanceOptions;
