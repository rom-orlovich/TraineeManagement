import React, { useEffect, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import InputAdormentMui from "../../../../components/MUI/FormCompnents/InputAdormentMui/InputAdormentMui";

import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import AutocompleteRHF from "../../../../components/ReactHookForm/Components/AutocompleteRHF";

import FormRHF from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";

import {
  getOptionLabel,
  isOptionEqualToValue,
  renderOption,
} from "./AutoCompleteProps";

import { setDataNotSource } from "./helperFunOA";
import { useGetCheckBoxEditOrAdd } from "./HelperHooksOA";

import {
  expenseOptions,
  defaultExpensesValuesForm,
  FormValuesExpenses,
  ExpensesInterface,
} from "./OptionAddingTypes";

const { Grid } = UIComponentsExportMui;
const ObjForm: UseFormProps = {
  defaultValues: defaultExpensesValuesForm,
  mode: "onBlur",
};
function FormExpensesAdding() {
  const [optionsValue, setOptionValue] = useState(expenseOptions);

  const [inputValue, setInputValue] = useState("");

  const { propsAutoComplete, CheckBoxButtons, setStateForm } =
    useGetCheckBoxEditOrAdd(optionsValue);

  // useFollowState({ optionsValue });
  return (
    <>
      <FormProviderRHF values={ObjForm}>
        {({
          handleSubmit,
          control,
          setValue,
          reset,
        }: UseFormReturn<FormValuesExpenses>) => (
          <FormRHF
            style={{ width: "100%" }}
            submitFun={handleSubmit((data) => {
              setDataNotSource(data, setOptionValue);
              setInputValue("");
              reset();
            })}
          >
            <Grid
              container
              item
              md={12}
              columnSpacing={2}
              justifyContent="space-around"
              alignContent="center"
              minHeight="5rem"
            >
              <Grid item md={4}>
                <AutocompleteRHF
                  control={control}
                  name="options"
                  //set the value of the price according to the option select
                  setValueOnField={(v) => {
                    if (!v) return;
                    const Value = v as ExpensesInterface;
                    setValue("price", Value.price);
                    setValue("id", Value.id);
                  }}
                  autoCompletePropsMui={{
                    onInputChange: (_, v) => setInputValue(v),

                    renderOption: renderOption(setOptionValue),

                    isOptionEqualToValue: isOptionEqualToValue,
                    //set the  input the user enter to the field
                    setValueOnOptions: (v) => setValue("options", v),
                    getOptionLabel: getOptionLabel,

                    inputValue: inputValue,
                    freeSolo: true,
                    clearOnBlur: false,
                    options: optionsValue,
                    ...propsAutoComplete,

                    textFieldProps: {
                      label: "Edit Or Add Option",
                      variant: "standard",
                    },
                  }}
                />
              </Grid>
              <Grid item md={3}>
                <InputRHF
                  control={control}
                  name="price"
                  label="Price"
                  variant="standard"
                  InputProps={{
                    endAdornment: <InputAdormentMui position="end" text="$" />,
                  }}
                />
              </Grid>

              <CheckBoxButtons
                control={control}
                onChange={(_, check) => {
                  setValue("mode", check);
                  setStateForm(check ? "edit" : "add");
                  reset();
                }}
                checkBoxName="mode"
              />
            </Grid>
          </FormRHF>
        )}
      </FormProviderRHF>
    </>
  );
}

export default FormExpensesAdding;
