import React from "react";
import { FieldValues } from "react-hook-form";

import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { InputMuiType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF;

const { TextField } = FormComponetsExportMui;

function InputMui<T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  ...rest
}: InputMuiType<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          helperText={error ? error.message : null}
          error={!!error}
          {...field}
          {...rest}
        ></TextField>
      )}
    />
  );
}

export default InputMui;
