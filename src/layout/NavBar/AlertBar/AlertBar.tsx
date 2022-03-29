import React from "react";
import { arrIsEmpty, classNameMaker } from "../../../helpers/helperFunction";
import { iconsLinks } from "../../../style/icons/icons";
import { propsType } from "../../../helpers/GlobalType";

import ST from "./AlertBar.module.scss";
import { AlertsListType } from "./AlertBarTypes";
const { FaBell } = iconsLinks;
function AlertBar({
  className,
  alertsList,
}: { alertsList: AlertsListType } & propsType) {
  const activeAlertArr = alertsList.filter((el) => el.active === true);
  const noActiveAlertArr = alertsList.filter((el) => el.active === false);
  return (
    <div className={classNameMaker(ST.alert)}>
      <div
        className={classNameMaker(
          ST.alertIndicator,
          `${
            arrIsEmpty(alertsList) ? ST.hasNoActiveAlerts : ST.hasActiveAlerts
          }`
        )}
      ></div>
      {!arrIsEmpty(activeAlertArr) ? (
        <div className={classNameMaker(ST.numberAlerts, ST.hasActiveAlerts)}>
          {activeAlertArr.length}
        </div>
      ) : (
        !arrIsEmpty(noActiveAlertArr) && (
          <div
            className={classNameMaker(ST.numberAlerts, ST.hasNoActiveAlerts)}
          >
            {noActiveAlertArr.length}
          </div>
        )
      )}
      <FaBell className={classNameMaker(ST.alertIcon, className)}></FaBell>
    </div>
  );
}

export default AlertBar;
