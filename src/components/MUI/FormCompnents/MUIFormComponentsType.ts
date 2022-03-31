import { DatePickerProps } from "@mui/lab/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";

import { SelectOption } from "@mui/material/node_modules/@mui/base";
import { TimePickerProps } from "@mui/lab";
import {
  AutocompleteProps,
  CheckboxProps,
  FormControlLabelProps,
} from "@mui/material";

export type SelectInputPropsMui = Omit<
  TextFieldProps,
  "defaultValue" | "name"
> & {
  options: SelectOption<string | number>[];
};
export type CheckBoxInputProps = Omit<FormControlLabelProps, "control"> & {
  checkboxProps?: CheckboxProps;
};
export type TimePickerPropsType = Omit<TimePickerProps, "renderInput"> & {
  textFieldProps?: TextFieldProps;
};
export type DatePickerPropsType = Omit<DatePickerProps, "renderInput"> & {
  textFieldProps?: TextFieldProps;
};

export type AutocompletePropsMui<
  T
  // Multiple extends boolean | undefined = undefined,
  // DisableClearable extends boolean | undefined = undefined,
  // FreeSolo extends boolean | undefined = undefined
> = Omit<AutocompleteProps<T, boolean, boolean, boolean>, "renderInput"> & {
  textFieldProps?: TextFieldProps;
  setValueOnOptions?: (v: any) => void;
};
