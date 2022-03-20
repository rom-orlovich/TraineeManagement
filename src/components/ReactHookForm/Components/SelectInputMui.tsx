import React from "react";
import { FieldValues } from "react-hook-form";
import { mapEl } from "../../../helpers/helperFunction";
import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { SelectInputTypeMui } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";
const { TextField, MenuItem } = FormComponetsExportMui;
const { Controller } = UtilitesRHF;
function SelectInputMui<T extends FieldValues>({
  options,
  defaultValue,
  name,
  ...rest
}: SelectInputTypeMui<T>) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({
        field: { onChange, value, ref, ...field },
        fieldState: { error },
      }) => {
        return (
          <TextField
            select
            error={!!error}
            helperText={error ? error.message : ""}
            value={value}
            onChange={onChange}
            {...field}
            {...rest}
          >
            {mapEl(options, ({ value, label }) => {
              return (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              );
            })}
          </TextField>
        );
      }}
    />
  );
}

export default SelectInputMui;
