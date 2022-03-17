import { TextFieldProps } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import {
  Control,
  FieldPath,
  FieldPathValue,
  Path,
  UnpackNestedValue,
  UseFormProps,
} from "react-hook-form";
import { AnyFun } from "../../helpers/GlobalType";

import { SelectOption } from "@mui/material/node_modules/@mui/base";

export type FormProviderMuiType<T> = {
  values: UseFormProps<T>;
} & { children: ReactNode };

export type FormType<T> = {
  children?: ReactNode;
  submitFun: AnyFun<void>;
};
type ControlInput<T> = {
  name: Path<T>;
  control: Control<T>;
  defaultValue?: UnpackNestedValue<FieldPathValue<T, FieldPath<T>>>;
};

export type InputMuiType<T> = ControlInput<T> &
  TextFieldProps &
  Omit<TextFieldProps, "defaultValue" | "name">;

export type SelectInputTypeMui<T> = InputMuiType<T> & {
  options: SelectOption<string | number>[];
};
export type DataPickerType<T> = InputMuiType<T>;
