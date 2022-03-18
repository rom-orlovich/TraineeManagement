import React, { useEffect, useState } from "react";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import {
  TimeLinePeriodValueType,
  propsType,
} from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import { getFirstAndLastDateMonth } from "../../../helpers/DatesHelpers";

import DatePickerInput from "../../../components/MUI/FormCompnent/DatePickerInput";
import ST from "./HeaderChartBar.module.scss";
import { PaperProps } from "@mui/material";
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

  const stylePopper: Partial<PaperProps<"div", {}>> | undefined = {
    style: {
      position: "relative",
      inset: "-325px auto auto 0",
    },
  };

  const labelDisplayFrom = checkToDateActive ? "From" : "Choose Date";
  const nameDisplayFrom = checkToDateActive ? "from" : "chooseDate";
  return (
    <div className={classNameMaker(ST, className)}>
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
          <DatePickerInput
            datePickerProps={{
              onChange: (dateFrom) => {
                let newDateFrom = new Date(dateFrom ? dateFrom : "");

                setFrom(newDateFrom);
                setFromInput(newDateFrom);

                setBoolFrom(
                  newDateFrom ? newDateFrom > to && checkToDateActive : false
                );
                setBoolTo(
                  newDateFrom ? newDateFrom > to && checkToDateActive : false
                );
              },
              value: from,
              PaperProps: { ...stylePopper },
            }}
            textFieldProps={{
              label: labelDisplayFrom,
              name: nameDisplayFrom,
              helperText: `${boolFrom ? "Enter vaild date" : ""}`,
              error: boolFrom,
            }}
          />
        </span>
        <span className={classNameMaker(ST.toDate)}>
          {checkToDateActive && (
            <DatePickerInput
              datePickerProps={{
                onChange: (dateTo) => {
                  let newDateTo = new Date(dateTo ? dateTo : "");
                  setTo(newDateTo);
                  setToInput(newDateTo);
                  setBoolFrom(
                    newDateTo ? newDateTo < from && checkToDateActive : false
                  );
                  setBoolTo(
                    newDateTo ? newDateTo < from && checkToDateActive : false
                  );
                },
                value: to,
                PaperProps: { ...stylePopper },
              }}
              textFieldProps={{
                label: "To",
                name: "to",

                helperText: `${boolTo ? "Enter vaild date" : ""}`,
                error: boolTo,
              }}
            />
          )}
        </span>
      </span>
    </div>
  );
}

export default HeaderChartBar;
