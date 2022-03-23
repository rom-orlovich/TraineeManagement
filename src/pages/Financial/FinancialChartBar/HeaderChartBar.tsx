import React, { useEffect, useState } from "react";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import {
  TimeLinePeriodValueType,
  propsType,
} from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import { getFirstAndLastDateMonth } from "../../../helpers/DatesHelpers";

import DatePickerMui from "../../../components/MUI/FormCompnents/DatePickerMui/DatePickerMui";
import ST from "./HeaderChartBar.module.scss";
import { PaperProps, PopperProps } from "@mui/material";
function HeaderChartBar({
  className,
  timeLineDisplay,
  setTimeLineDisplay,
  setFromInput,
  setToInput,
}: propsType & {
  timeLineDisplay: TimeLinePeriodValueType;
  setTimeLineDisplay: React.Dispatch<
    React.SetStateAction<TimeLinePeriodValueType>
  >;
  setFromInput: React.Dispatch<React.SetStateAction<Date>>;
  setToInput: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const timeLineDisplayObj = {
    daily: false,
    weekly: false,
    monthly: true,
    yearly: true,
    years: true,
  };
  const [first, last] = getFirstAndLastDateMonth();
  const checkToDateActive = timeLineDisplayObj[timeLineDisplay];
  const [from, setFrom] = useState<Date>(first);
  const [to, setTo] = useState<Date>(first);
  const [boolFrom, setBoolFrom] = useState(false);
  const [boolTo, setBoolTo] = useState(false);
  useEffect(() => {
    setTo(timeLineDisplayObj[timeLineDisplay] ? last : from);
  }, [checkToDateActive]);

  const PopperProps: Partial<PopperProps> | undefined = {
    popperOptions: { placement: "top" },
  };
  const style = {
    width: "10rem",
  };

  const labelDisplayFrom = checkToDateActive ? "From" : "Choose Date";
  const nameDisplayFrom = checkToDateActive ? "from" : "chooseDate";

  return (
    <div className={classNameMaker(ST.HeaderChartBar, className)}>
      <span>
        <label htmlFor={optionSelect[2].name}>{optionSelect[2].name} </label>
        <SelectInput
          data={optionSelect[2]}
          SetValueOnChange={(value) => {
            setTimeLineDisplay(value);
          }}
        ></SelectInput>
      </span>
      <span>
        <span>
          <DatePickerMui
            PopperProps={PopperProps}
            onChange={(dateFrom) => {
              let date = dateFrom as Date;
              let newDateFrom = new Date(date ? date : "");

              setFrom(newDateFrom);
              setFromInput(newDateFrom);

              setBoolFrom(
                newDateFrom ? newDateFrom > to && checkToDateActive : false
              );
              setBoolTo(
                newDateFrom ? newDateFrom > to && checkToDateActive : false
              );
            }}
            value={from}
            textFieldProps={{
              label: labelDisplayFrom,
              name: nameDisplayFrom,
              helperText: `${boolFrom ? "Enter vaild date" : ""}`,
              error: boolFrom,
              style: style,
            }}
          />
        </span>
        <span className={classNameMaker(ST.toDate)}>
          {checkToDateActive && (
            <DatePickerMui
              PopperProps={PopperProps}
              onChange={(dateTo) => {
                let date = dateTo as Date;
                let newDateTo = new Date(date ? date : "");
                setTo(newDateTo);
                setToInput(newDateTo);
                setBoolFrom(
                  newDateTo ? newDateTo < from && checkToDateActive : false
                );
                setBoolTo(
                  newDateTo ? newDateTo < from && checkToDateActive : false
                );
              }}
              value={to}
              textFieldProps={{
                label: "To",
                name: "to",

                helperText: `${boolTo ? "Enter vaild date" : ""}`,
                error: boolTo,
                style: style,
              }}
            />
          )}
        </span>
      </span>
    </div>
  );
}

export default HeaderChartBar;
