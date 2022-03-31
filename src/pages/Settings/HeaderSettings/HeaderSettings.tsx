import React from "react";
import { NavLink } from "react-router-dom";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { classNameMaker } from "../../../helpers/helperFunction";
import ST from "./HeaderSettings.module.scss";
function HeaderSettings() {
  const { Grid } = UIComponentsExportMui;
  const isActive = ({ isActive }: { isActive: boolean }) =>
    classNameMaker(isActive && ST.activeLink);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      height="5rem"
    >
      <Grid item md={3} className={classNameMaker(ST.Header_link)}>
        <NavLink className={isActive} to="/settings/sitePreferences">
          Site Preferences
        </NavLink>
      </Grid>
      <Grid item md={3} className={classNameMaker(ST.Header_link)}>
        <NavLink className={isActive} to="/settings/userSettings">
          User Settings
        </NavLink>
      </Grid>
      <Grid item md={3} className={classNameMaker(ST.Header_link)}>
        <NavLink className={isActive} to="/settings/advanceOptions">
          Advance Options
        </NavLink>
      </Grid>
    </Grid>
  );
}

export default HeaderSettings;
