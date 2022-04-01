import React, { useEffect, useRef, useState } from "react";
import { FormComponetsExportMui } from "../../FormComponetsExport/FormComponetsExportMui";
import { AutocompletePropsMui } from "../MUIFormComponentsType";

const { Autocomplete, TextField } = FormComponetsExportMui;
function AutocompleteMui<T>({
  options,
  textFieldProps,

  onChange,
  setValueOnOptions,

  ...AutoCompleteProps
}: AutocompletePropsMui<T>) {
  return (
    <Autocomplete
      options={options}
      {...AutoCompleteProps}
      onChange={onChange}
      renderInput={(parma) => {
        return (
          <TextField
            {...parma}
            {...textFieldProps}
            onChange={(e) => {
              const onChange = textFieldProps?.onChange;
              if (!AutoCompleteProps.freeSolo) return;
              onChange && onChange(e);

              //set the value of the text input in the options proprty when press enter
              setValueOnOptions && setValueOnOptions(e.target.value);
            }}
          ></TextField>
        );
      }}
    />
  );
}

export default AutocompleteMui;
