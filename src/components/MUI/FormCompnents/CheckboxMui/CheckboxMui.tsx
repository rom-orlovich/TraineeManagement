import React from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { CheckBoxInputProps } from "../MUIFormComponentsType";
const { FormControlLabel, Checkbox } = FormComponetsExportMui;
function CheckboxMui({
  checkboxProps,
  label,
  ...formControlProps
}: CheckBoxInputProps) {
  return (
    <FormControlLabel
      control={<Checkbox {...checkboxProps} />}
      label={label}
      {...formControlProps}
    />
  );
}

export default CheckboxMui;
