import { TimePickerProps } from "@mui/lab";
import React from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { TimePickerPropsType } from "../MUIFormComponentsType";
const { LocalizationProvider, AdapterDateFns, TimePicker, TextField } =
  FormComponetsExportMui;
function TimePickerMui({ textFieldProps, ...rest }: TimePickerPropsType) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampm={false}
        ampmInClock={false}
        {...rest}
        renderInput={(parma) => {
          return <TextField {...parma} {...textFieldProps}></TextField>;
        }}
      />
    </LocalizationProvider>
  );
}

export default TimePickerMui;
