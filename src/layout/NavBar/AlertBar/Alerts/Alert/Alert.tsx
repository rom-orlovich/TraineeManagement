import React from "react";
import { iconsMui } from "../../../../../components/MUI/IconsMui/IconsMuiExports";
import {
  getLocalDate,
  getLocalTime,
} from "../../../../../helpers/DatesHelpers";
import { ReactDispatch } from "../../../../../helpers/GlobalType";
import {
  classNameMaker,
  filterById,
} from "../../../../../helpers/helperFunction";
import { AlertInterface, AlertsListType } from "../../AlertBarTypes";

import ST from "./Alert.module.scss";

function Alert({
  name,
  description,
  time,
  date,
  active,
  id,
  setStateList,
}: AlertInterface & { setStateList?: ReactDispatch<AlertsListType> }) {
  const dateLocalFormat = getLocalDate(date);
  const timeLocalFormat = getLocalTime(time);
  const { IconButton, RemoveCircleOutlineIcon } = iconsMui;
  return (
    <>
      <li
        className={classNameMaker(
          ST.alertFormat,
          !active ? ST.unActiveAlert : ""
        )}
      >
        <span className={classNameMaker(ST.timeAlert)}>
          <div>
            <b>{dateLocalFormat} </b>
          </div>
          <div>
            <b style={{ fontWeight: 500 }}>{timeLocalFormat}</b>
          </div>
        </span>

        <span className={classNameMaker(ST.descriptionAlert)}>
          <div>
            <b> {name}</b>
          </div>
          <div>
            <b style={{ fontWeight: 500 }}>{description}</b>{" "}
          </div>
        </span>

        <span className={classNameMaker(ST.removeAlertIcon)}>
          <IconButton
            onClick={() => {
              setStateList && setStateList((pre) => [...filterById(id, pre)]);
            }}
          >
            <RemoveCircleOutlineIcon style={{ color: "red" }} />
          </IconButton>
        </span>
      </li>
    </>
  );
}

export default Alert;
