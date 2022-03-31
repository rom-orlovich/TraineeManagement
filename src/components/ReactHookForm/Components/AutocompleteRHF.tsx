import { AutocompleteValue } from "@mui/material";
import React, { useState } from "react";
import { FieldValue } from "react-hook-form";
import AutocompleteMui from "../../MUI/FormCompnents/AutocompleteMui/AutocompleteMui";
import { AutocompletePropsRHF } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF;
function AutocompleteRHF<T, O>({
  control,
  name,
  setValueOnField,
  autoCompletePropsMui,
}: AutocompletePropsRHF<T, O> & {
  setValueOnField?: (
    value: AutocompleteValue<O, boolean, boolean, boolean>
  ) => void;
}) {
  const [values, setValue] = useState<any>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, ...field }, fieldState }) => (
        <AutocompleteMui
          textFieldProps={{
            inputRef: ref,
            ...autoCompletePropsMui.textFieldProps,
            onChange,
            ...field,
          }}
          onChange={(_, value, r) => {
            onChange(value);
            //handle the setting of value on other field according to the options select data
            setValueOnField && setValueOnField(value);
          }}
          {...autoCompletePropsMui}
        />
      )}
    />
  );
}

export default AutocompleteRHF;
