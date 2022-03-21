import React from "react";
import { FieldValues } from "react-hook-form";
import { classNameMaker } from "../../../helpers/helperFunction";

import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { InputMuiType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";
import ST from "./InputMui.module.scss";
const { Controller } = UtilitesRHF;

const { TextField } = FormComponetsExportMui;

function InputMui<T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  className,
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
          className={classNameMaker(ST, className)}
          {...field}
          {...rest}
        ></TextField>
      )}
    />
  );
}

export default InputMui;
