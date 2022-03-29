import React from "react";
import { propsType } from "../../../../helpers/GlobalType";
import { mapEl } from "../../../../helpers/helperFunction";
import { AlertsListType } from "../AlertBarTypes";
import Alert from "./Alert/Alert";
import ST from "./Alerts.module.scss";
function Alerts({ AlertsList }: propsType & { AlertsList: AlertsListType }) {
  return (
    <>
      {mapEl(AlertsList, ({ id, ...rest }) => {
        return <Alert key={id} id={id} {...rest} />;
      })}
    </>
  );
}

export default Alerts;
