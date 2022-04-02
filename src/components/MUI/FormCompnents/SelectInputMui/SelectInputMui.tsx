import React from "react";
import { classNameMaker, mapEl } from "../../../../helpers/helperFunction";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { SelectInputPropsMui } from "../MUIFormComponentsType";
import ST from "./SelectInputMui.module.scss";
const { TextField, MenuItem } = FormComponetsExportMui;

function SelectInputMui({
  options,
  value,

  className,
  ...rest
}: SelectInputPropsMui) {
  console.log(rest);
  return (
    <TextField
      select
      className={classNameMaker(ST, className)}
      value={value}
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
}

export default SelectInputMui;
