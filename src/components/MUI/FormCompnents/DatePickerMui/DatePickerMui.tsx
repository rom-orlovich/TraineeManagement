import React, { useEffect, useState } from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { DatePickerPropsType } from "../MUIFormComponentsType";
import ST from "./DatePickerMui.module.scss";
import { classNameMaker } from "../../../../helpers/helperFunction";
const { AdapterDateFns, DatePicker, LocalizationProvider, TextField } =
  FormComponetsExportMui;
function DatePickerMui({
  textFieldProps,
  value,

  ...datePickerRestProps
}: DatePickerPropsType) {
  const [valueChange, setValue] = useState(textFieldProps?.value);
  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className={classNameMaker(ST)}
        inputFormat="dd/MM/yyyy"
        renderInput={(parma) => {
          return <TextField {...parma} {...textFieldProps}></TextField>;
        }}
        value={valueChange}
        {...datePickerRestProps}
      ></DatePicker>
    </LocalizationProvider>
  );
}

export default DatePickerMui;
