import React from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { DatePickerPropsType } from "../MUIFormComponentsType";
import ST from "./DatePickerMui.module.scss";
import { classNameMaker } from "../../../../helpers/helperFunction";
const { AdapterDateFns, DatePicker, LocalizationProvider, TextField } =
  FormComponetsExportMui;
function DatePickerMui({ textFieldProps, ...rest }: DatePickerPropsType) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className={classNameMaker(ST)}
        inputFormat="dd/MM/yyyy"
        renderInput={(parma) => {
          return <TextField {...parma} {...textFieldProps}></TextField>;
        }}
        {...rest}
      ></DatePicker>
    </LocalizationProvider>
  );
}

export default DatePickerMui;
