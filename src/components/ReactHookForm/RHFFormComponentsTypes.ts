import { TextFieldProps } from "@mui/material";
import { DetailedHTMLProps, ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldPathValue,
  NestedValue,
  Path,
  PathValue,
  UnpackNestedValue,
  UseFormProps,
} from "react-hook-form";
import { AnyFun, propsType } from "../../helpers/GlobalType";

import {
  AutocompletePropsMui,
  CheckBoxInputProps,
  DatePickerPropsType,
  SelectInputPropsMui,
  TimePickerPropsType,
} from "../MUI/FormCompnents/MUIFormComponentsType";

export type FormProviderMuiType<T> = {
  values: UseFormProps<T>;
} & { children: ReactNode };

export type FormType<T> = {
  submitFun: AnyFun<void>;
} & propsType &
  DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

type ControlInput<T> = {
  name: Path<T>;
  control: Control<T, any>;
  defaultValue?: UnpackNestedValue<FieldPathValue<T, FieldPath<T>>>;
};

export type InputRHFprops<T> = ControlInput<T> &
  Omit<TextFieldProps, "defaultValue" | "name">;

export type CheckboxRHF<T> = ControlInput<T> & {
  checkboxMuiProps?: Omit<CheckBoxInputProps, "control" | "label">;
} & { label: string | number | React.ReactElement };
export type SelectInputTypeMui<T> = ControlInput<T> & SelectInputPropsMui;

export type TimePickerPropsRHF<T> = ControlInput<T> & {
  timePicker?: Omit<TimePickerPropsType, "onChange" | "value">;
};

export type DatePickerPropsRHF<T> = ControlInput<T> & {
  datePicker?: Omit<DatePickerPropsType, "onChange" | "value">;
};

export type AutocompletePropsRHF<T, O> = ControlInput<T> & {
  autoCompletePropsMui: Omit<AutocompletePropsMui<O>, "onChange" | "value">;
};
