import React, { useEffect, useState } from "react";
import SelectInput from "../../../components/Form/SelectInput/SelectInput";
import { optionSelect } from "../../../DummyData/DummyData";
import {
  TimeLinePeriodValueType,
  propsType,
} from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import { getFirstAndLastDateMonth } from "../../../helpers/DatesHelpers";
import { borderColor } from "@mui/system";
import DatePickerInput from "../../../components/MUI/FormCompnent/DatePickerInput";
import ST from "./HeaderChartBar.module.scss";
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
  const [first, last] = getFirstAndLastDateMonth();
  const [from, setFrom] = useState<Date>(first);
  const [to, setTo] = useState<Date>(last);
  const [boolFrom, setBoolFrom] = useState(false);
  const [boolTo, setBoolTo] = useState(false);
  const timeLineDisplayObj = {
    daily: false,
    weekly: false,
    monthly: true,
    yearly: true,
    years: true,
  };
  const labelDisplayFrom = timeLineDisplayObj[timeLineDisplay]
    ? "From"
    : "Choose Date";
  const nameDisplayFrom = timeLineDisplayObj[timeLineDisplay]
    ? "from"
    : "chooseDate";
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
            className={classNameMaker()}
            datePickerProps={{
              onChange: (dateFrom) => {
                console.log(dateFrom);
                let newDateFrom = new Date(dateFrom ? dateFrom : "");

                setFrom(newDateFrom);
                setFromInput(newDateFrom);

                setBoolFrom(newDateFrom ? newDateFrom >= to : false);
                // setBoolTo(newDateFrom ? newDateFrom <= to : false);
              },
              value: from,
              PaperProps: {
                style: {
                  position: "relative",
                  inset: "-343px auto auto 0",
                },
              },
            }}
            textFieldProps={{
              label: labelDisplayFrom,
              name: nameDisplayFrom,
              // helperText: "Please Enter Vaild Date",
              error: boolFrom,
            }}
          />
        </span>
        <span className={classNameMaker(ST.toDate)}>
          {timeLineDisplayObj[timeLineDisplay] && (
            <DatePickerInput
              datePickerProps={{
                onChange: (dateTo) => {
                  console.log(dateTo);
                  let newDateTo = new Date(dateTo ? dateTo : "");
                  setTo(newDateTo);
                  setToInput(newDateTo);
                  setBoolTo(newDateTo ? from >= newDateTo : false);
                  // setBoolFrom(newDateTo ? newDateTo >= from : false);
                },
                value: to,
                PaperProps: {
                  style: {
                    position: "relative",
                    inset: "-343px auto auto 0",
                  },
                },
              }}
              textFieldProps={{
                label: "To",
                name: "to",

                // errorText: "Please Enter Vaild Date",
                error: boolTo,
              }}
            />
          )}
          {/* <label htmlFor="from"> From </label>
        <input
          onChange={(e) => {
            let date = new Date(e.target.value);
            setFrom(date);
            setFromInput(date);
            setBool(date > to);
          }}
          name="from"
          type="date"
        />
        <label htmlFor="to"> To </label>
        {bool && <span>*</span>}
        <input
          onChange={(e) => {
            let date = new Date(e.target.value);
            setTo(date);
            setToInput((pre) => {
              let res = date > from ? date : pre;
              return res;
            });
            setBool(date < from);
          }}
          style={{
            borderColor: `${bool ? "red" : "initial"}`,
            outlineColor: `${bool ? "red" : "initial"}`,
          }}
          name="to"
          type="date"
        /> */}
        </span>
      </span>
    </div>
  );
}

export default HeaderChartBar;
