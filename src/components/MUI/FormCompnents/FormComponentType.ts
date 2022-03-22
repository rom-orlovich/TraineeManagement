import { DatePickerProps } from "@mui/lab/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";
import { propsType } from "../../../helpers/GlobalType";
import { SelectOption } from "@mui/material/node_modules/@mui/base";
export type DatePickerProp = {
  datePickerProps: Omit<DatePickerProps<Date>, "renderInput">;
  textFieldProps?: TextFieldProps;
} & propsType;

export type SelectInputPropsMui = TextFieldProps & {
  options: SelectOption<string | number>[];
};
