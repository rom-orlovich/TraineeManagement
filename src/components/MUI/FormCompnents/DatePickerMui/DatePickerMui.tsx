import React from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { DatePickerProp } from "../FormComponentType";
import ST from "./DatePickerMui.module.scss";
import { classNameMaker } from "../../../../helpers/helperFunction";
const { AdapterDateFns, DatePicker, LocalizationProvider, TextField } =
  FormComponetsExportMui;
function DatePickerMui({
  datePickerProps: { onChange, value, DialogProps, ...restDatePicker },
  textFieldProps,
}: DatePickerProp) {
  const TextFieldProps = textFieldProps ? { ...textFieldProps } : {};

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat="dd/MM/yyyy"
        onChange={onChange}
        value={value}
        {...restDatePicker}
        renderInput={(parma) => {
          return (
            <TextField
              {...parma}
              {...TextFieldProps}
              className={classNameMaker(ST)}
            ></TextField>
          );
        }}
      ></DatePicker>
    </LocalizationProvider>
  );
}

export default DatePickerMui;
