import React from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { iconsLinks } from "../../../style/icons/icons";
import { propsType } from "../../../helpers/GlobalType";

import ST from "./AlertBar.module.scss";
const { FaBell } = iconsLinks;
function AlertBar({ className }: propsType) {
  return (
    <div className={classNameMaker(ST.alert, className)}>
      <div className={classNameMaker(ST.getAlert)}></div>
      <FaBell className={classNameMaker(ST.alertIcon)}></FaBell>
    </div>
  );
}

export default AlertBar;
