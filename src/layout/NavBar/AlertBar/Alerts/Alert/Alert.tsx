import React from "react";
import {
  getLocalDate,
  getLocalTime,
} from "../../../../../helpers/DatesHelpers";
import { classNameMaker } from "../../../../../helpers/helperFunction";
import { AlertInterface } from "../../AlertBarTypes";
import { AlertsList } from "../../AlertsList";

import ST from "./Alert.module.scss";

function Alert({ name, description, time, date }: AlertInterface) {
  const dateLocalFormat = getLocalDate(date);
  const timeLocalFormat = getLocalTime(time);
  return (
    <>
      <li className={classNameMaker(ST.alertFormat)}>
        <span className={classNameMaker(ST.timeAlert)}>
          <div>{dateLocalFormat}</div>
          <div>{timeLocalFormat} </div>
        </span>

        <span className={classNameMaker(ST.descriptionAlert)}>
          <div>{name}</div>
          <div>{description} </div>
        </span>

        <span className={classNameMaker(ST.removeAlertIcon)}></span>
      </li>
    </>
  );
}

export default Alert;
