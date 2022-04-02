import React from "react";
import { Control, Path } from "react-hook-form";
import { UIComponentsExportMui } from "../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import CheckBoxRHF from "../../../../../components/ReactHookForm/Components/CheckBoxRHF";
import { useChangeToAddState } from "../helpersOA/helperHooksOA";
import { ButtonsEditOrAddProps, OptionInterface } from "./FormsOATypes";
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
}: ButtonsEditOrAddProps<O, FormValues>) {
  const {
    stateForm: { button, checkValue },
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
