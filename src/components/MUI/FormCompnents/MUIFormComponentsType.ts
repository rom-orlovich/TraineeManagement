import { DatePickerProps } from "@mui/lab/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";

import { SelectOption } from "@mui/material/node_modules/@mui/base";
import { TimePickerProps } from "@mui/lab";

export type SelectInputPropsMui = Omit<
  TextFieldProps,
  "defaultValue" | "name"
> & {
  options: SelectOption<string | number>[];
};
export type TimePickerPropsType = Omit<TimePickerProps, "renderInput"> & {
  textFieldProps?: TextFieldProps;
};
export type DatePickerPropsType = Omit<DatePickerProps, "renderInput"> & {
  textFieldProps?: TextFieldProps;
};
