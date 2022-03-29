import React from "react";
import { propsType, ReactDispatch } from "../../../../helpers/GlobalType";
import { mapEl } from "../../../../helpers/helperFunction";
import { AlertsListType } from "../AlertBarTypes";
import Alert from "./Alert/Alert";
import ST from "./Alerts.module.scss";
function Alerts({
  alertsList,
  setStateList,
}: propsType & {
  alertsList: AlertsListType;
  setStateList?: ReactDispatch<AlertsListType>;
}) {
  return (
    <>
      {mapEl(alertsList, ({ id, ...rest }) => {
        return <Alert key={id} id={id} {...rest} setStateList={setStateList} />;
      })}
    </>
  );
}

export default Alerts;
