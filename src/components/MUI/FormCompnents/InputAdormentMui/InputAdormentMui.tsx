import { InputAdornmentProps } from "@mui/material";
import React from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
const { InputAdornment } = FormComponetsExportMui;
function InputAdormentMui({
  position,
  text,
  ...props
}: InputAdornmentProps & { text?: string }) {
  return (
    <InputAdornment position={position} {...props}>
      {text}
    </InputAdornment>
  );
}

export default InputAdormentMui;
