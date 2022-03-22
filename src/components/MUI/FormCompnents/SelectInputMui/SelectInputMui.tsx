import React from "react";
import { classNameMaker, mapEl } from "../../../../helpers/helperFunction";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { SelectInputPropsMui } from "../FormComponentType";
import ST from "./SelectInputMui.module.scss";
const { TextField, MenuItem } = FormComponetsExportMui;

function SelectInputMui({
  options,
  value,
  name,
  className,
  ...rest
}: SelectInputPropsMui) {
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
