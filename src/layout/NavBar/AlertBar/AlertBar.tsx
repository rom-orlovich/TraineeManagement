import React from "react";
import { arrIsEmpty, classNameMaker } from "../../../helpers/helperFunction";
import { iconsLinks } from "../../../style/icons/icons";
import { propsType } from "../../../helpers/GlobalType";

import ST from "./AlertBar.module.scss";
const { FaBell } = iconsLinks;
function AlertBar({
  className,
  AlertsList,
}: { AlertsList: any[] } & propsType) {
  return (
    <div className={classNameMaker(ST.alert)}>
      <div
        className={classNameMaker(
          ST.alertIndicator,
          `${arrIsEmpty(AlertsList) ? ST.hasNoAlerts : ST.hasAlerts}`
        )}
      ></div>
      <FaBell className={classNameMaker(ST.alertIcon, className)}></FaBell>
    </div>
  );
}

export default AlertBar;
