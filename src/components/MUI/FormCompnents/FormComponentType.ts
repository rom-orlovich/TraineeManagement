import { DatePickerProps } from "@mui/lab/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";
import { propsType } from "../../../helpers/GlobalType";
export type DatePickerProp = {
  datePickerProps: Omit<DatePickerProps<Date>, "renderInput">;
  textFieldProps?: TextFieldProps;
} & propsType;
