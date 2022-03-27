import React from "react";
import DatePickerMui from "../../MUI/FormCompnents/DatePickerMui/DatePickerMui";
import { FormComponetsExportMui } from "../../MUI/FormComponetsExport/FormComponetsExportMui";
import { DatePickerPropsRHF, InputRHFprops } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
const { Controller } = UtilitesRHF;
// { AdapterDateFns, LocalizationProvider, DatePicker, TextField } =
//   FormComponetsExportMui;
function DatePickerRHF<T>({
  control,
  name,
  datePicker,

  ...controllerProps
}: DatePickerPropsRHF<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        return (
          <DatePickerMui
            textFieldProps={{
              error: !!error,
              helperText: !!error
                ? error.message
                : datePicker?.textFieldProps?.helperText,
              ...datePicker?.textFieldProps,
            }}
            {...field}
            {...datePicker}
            {...controllerProps}
          />
        );
      }}
    />
  );
}

export default DatePickerRHF;
