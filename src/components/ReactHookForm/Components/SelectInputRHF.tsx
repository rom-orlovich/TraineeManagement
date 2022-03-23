import React from "react";
import { FieldValues } from "react-hook-form";
import { mapEl } from "../../../helpers/helperFunction";
import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { SelectInputTypeMui } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
import SelectInputMui from "../../MUI/FormCompnents/SelectInputMui/SelectInputMui";
const { TextField, MenuItem } = FormComponetsExportMui;

const { Controller } = UtilitesRHF;
function SelectInputRHF<T extends FieldValues>({
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
          <SelectInputMui
            options={options}
            error={!!error}
            helperText={error ? error.message : ""}
            value={value}
            onChange={onChange}
            {...field}
            {...rest}
          />
        );
      }}
    />
  );
}

export default SelectInputRHF;
