import React from "react";
import CheckboxMui from "../../MUI/FormCompnents/CheckboxMui/CheckboxMui";
import { CheckboxRHF } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF;
function CheckBoxRHF<T>({
  control,
  name,
  checkboxMuiProps,
  label,
}: CheckboxRHF<T>) {
  return (
    <Controller
      render={({ field: { ref, ...field }, fieldState }) => (
        <CheckboxMui
          label={label}
          {...checkboxMuiProps}
          checkboxProps={{ ...field, ...checkboxMuiProps?.checkboxProps }}
        />
      )}
      control={control}
      name={name}
    ></Controller>
  );
}

export default CheckBoxRHF;
