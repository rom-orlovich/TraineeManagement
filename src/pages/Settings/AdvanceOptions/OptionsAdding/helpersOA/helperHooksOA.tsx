import { useCallback, useEffect, useMemo, useState } from "react";
import { Control, Path } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { ReactDispatch } from "../../../../../helpers/GlobalType";
import { arrIsEmpty } from "../../../../../helpers/helperFunction";
import { getOptionDisable } from "../FormsOA/AutoCompleteProps";
import ButtonsEditOrAdd from "../FormsOA/ButtonsEditOrAdd";
import {
  OptionInterface,
  OptionTypeData,
  stateButtonsFormsOAType,
} from "../FormsOA/FormsOATypes";
import { CheckBoxButtonsProps } from "./helperHooksOATypes";
const { Button } = FormComponetsExportMui;

export const useChangeToAddState = (
  optionsValue: any[],
  setStateForm: ReactDispatch<stateButtonsFormsOAType>
) => {
  return useEffect(() => {
    if (arrIsEmpty(optionsValue)) setStateForm("add");
  }, [optionsValue]);
};

//prepre the state of the buttons and the checkbox of the adding form

export const useGetButtonsState = () => {
  const [stateForm, setStateForm] = useState<stateButtonsFormsOAType>("add");
  const stateFormObj = useMemo(() => {
    return {
      edit: {
        getOptionDisabled: undefined,
        checkValue: true,
        button: (
          <Button type="submit" variant="contained">
            Save
          </Button>
        ),
      },
      add: {
        checkValue: false,
        getOptionDisabled: getOptionDisable,
        button: (
          <Button type="submit" variant="contained">
            Add
          </Button>
        ),
      },
    };
  }, []);
  return { stateForm: stateFormObj[stateForm], setStateForm };
};

//get the buttons and check box of the form
export function useGetCheckBoxEditOrAdd<O extends OptionInterface>(
  optionsValue: OptionTypeData<O>
) {
  const stateButtons = useGetButtonsState();
  const {
    stateForm: { button, checkValue, ...propsAutoComplete },
    setStateForm,
  } = stateButtons;
  useChangeToAddState(optionsValue, setStateForm);

  const CheckBoxButtons = useCallback(
    <FormValues extends { mode: boolean }>({
      onChange,
      control,
      checkBoxName,
    }: CheckBoxButtonsProps<FormValues>) => (
      <ButtonsEditOrAdd
        control={control}
        onChange={onChange}
        checkBoxName={checkBoxName}
        optionsValue={optionsValue}
        state={stateButtons}
      />
    ),
    [stateButtons, optionsValue]
  );

  return {
    CheckBoxButtons,
    setStateForm,
    propsAutoComplete: propsAutoComplete,
  };
}
