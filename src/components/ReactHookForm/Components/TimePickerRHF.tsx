import React from "react";

import TimePickerMui from "../../MUI/FormCompnents/TimePickerMui/TimePickerMui";
import { InputRHFprops, TimePickerPropsRHF } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF;
function TimePickerRHF<T>({
  control,
  name,
  timePicker,
  ...controller
}: TimePickerPropsRHF<T>) {
  return (
    <Controller
      name={name}
      control={control}
      {...controller}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        return (
          <TimePickerMui
            textFieldProps={{
              error: !!error,
              helperText: !!error
                ? error.message
                : timePicker?.textFieldProps?.helperText,
              ...timePicker?.textFieldProps,
            }}
            {...field}
            {...timePicker}
          />
        );
      }}
    ></Controller>
  );
}

export default TimePickerRHF;
