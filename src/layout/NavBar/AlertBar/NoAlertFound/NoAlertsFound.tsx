import React from "react";
import { classNameMaker } from "../../../../helpers/helperFunction";
import ST from "./NoAlertFound.module.scss";
function NoAlertsFound() {
  return (
    <div className={classNameMaker(ST.NoAlertFound)}>
      <div>
        <b style={{ fontWeight: "400" }}>No Alerts Found!</b>
      </div>
    </div>
  );
}

export default NoAlertsFound;
