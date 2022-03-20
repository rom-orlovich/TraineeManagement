import { TextFieldProps } from "@mui/material";
import {
  DetailedHTMLProps,
  ReactComponentElement,
  ReactElement,
  ReactNode,
} from "react";
import {
  Control,
  FieldPath,
  FieldPathValue,
  Path,
  UnpackNestedValue,
  UseFormProps,
} from "react-hook-form";
import { AnyFun, propsType } from "../../helpers/GlobalType";

import { SelectOption } from "@mui/material/node_modules/@mui/base";

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

export type InputMuiType<T> = ControlInput<T> &
  TextFieldProps &
  Omit<TextFieldProps, "defaultValue" | "name">;

export type SelectInputTypeMui<T> = InputMuiType<T> & {
  options: SelectOption<string | number>[];
};
export type DataPickerType<T> = InputMuiType<T>;
