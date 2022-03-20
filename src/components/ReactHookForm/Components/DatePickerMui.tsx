import React from "react";
import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { DataPickerType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF,
  { AdapterDateFns, LocalizationProvider, DatePicker, TextField } =
    FormComponetsExportMui;
function DatePickerMui<T>({
  control,
  name,
  label,
  ...rest
}: DataPickerType<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const { value } = field;
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              label={label}
              {...field}
              renderInput={(parmas) => {
                return (
                  <TextField
                    {...rest}
                    {...parmas}
                    helperText={
                      error || value === null ? `${label} is require` : ""
                    }
                    error={!!error || value === null}
                  ></TextField>
                );
              }}
            ></DatePicker>
          </LocalizationProvider>
        );
      }}
    />
  );
}

export default DatePickerMui;
