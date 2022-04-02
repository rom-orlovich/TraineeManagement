import { Control, Path } from "react-hook-form";
import { OptionInterface } from "../FormsOA/FormsOATypes";

export type ReturnButtonsHookStateOAType =
  | {
      getOptionDisabled: undefined;
      checkValue: boolean;
      button: JSX.Element;
    }
  | {
      checkValue: boolean;
      getOptionDisabled: <T extends OptionInterface>(o: T) => boolean;
      button: JSX.Element;
    };

export type CheckBoxButtonsProps<FormValues extends { mode: boolean }> = {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  control: Control<FormValues, any>;
  checkBoxName: Path<FormValues>;
};
