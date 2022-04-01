import React from "react";
import { Control, Path } from "react-hook-form";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import CheckBoxRHF from "../../../../components/ReactHookForm/Components/CheckBoxRHF";
import { useChangeToAddState } from "./HelperHooksOA";
import {
  OptionInterface,
  OptionTypeData,
  stateFormType,
} from "./OptionAddingTypes";
const { Grid } = UIComponentsExportMui;

function ButtonsEditOrAdd<
  O extends OptionInterface,
  FormValues extends { mode: boolean }
>({
  optionsValue,
  control,
  checkBoxName,
  onChange,
  state,
}: {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  optionsValue: OptionTypeData<O>;
  control: Control<FormValues, any>;
  checkBoxName: Path<FormValues>;
  state: {
    stateForm:
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
    setStateForm: React.Dispatch<React.SetStateAction<stateFormType>>;
  };
}) {
  const {
    stateForm: { button, checkValue, ...props },
    setStateForm,
  } = state;
  useChangeToAddState(optionsValue, setStateForm);
  return (
    <Grid container item md={3} alignContent="flex-end">
      <CheckBoxRHF
        control={control}
        name={checkBoxName}
        label="Edit"
        checkboxMuiProps={{
          checkboxProps: {
            value: checkValue,
            checked: checkValue,
            onChange: onChange,
          },
        }}
      />
      {button}
    </Grid>
  );
}

export default ButtonsEditOrAdd;
