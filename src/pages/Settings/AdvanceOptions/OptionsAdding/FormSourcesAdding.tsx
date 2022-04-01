import React, { useEffect, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";

import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import AutocompleteRHF from "../../../../components/ReactHookForm/Components/AutocompleteRHF";

import FormRHF from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";

import { useFollowState } from "../../../../helpers/HelperHooks";

import {
  getOptionLabel,
  isOptionEqualToValue,
  renderOption,
} from "./AutoCompleteProps";

import { setDataSource } from "./helperFunOA";
import { useGetCheckBoxEditOrAdd } from "./HelperHooksOA";

import {
  ProductsInterface,
  sourceOptions,
  defaultSourcesValuesForm,
  FormValuesSources,
} from "./OptionAddingTypes";

const { Grid } = UIComponentsExportMui;
const ObjForm: UseFormProps = {
  defaultValues: defaultSourcesValuesForm,
  mode: "onBlur",
};
function FormSourcesAdding() {
  const [optionsValue, setOptionValue] = useState(sourceOptions);

  const [inputValue, setInputValue] = useState("");

  const { propsAutoComplete, CheckBoxButtons, setStateForm } =
    useGetCheckBoxEditOrAdd(optionsValue);

  useFollowState({ optionsValue });
  return (
    <>
      <FormProviderRHF values={ObjForm}>
        {({
          handleSubmit,
          control,
          setValue,
          reset,
        }: UseFormReturn<FormValuesSources>) => (
          <FormRHF
            style={{ width: "100%" }}
            submitFun={handleSubmit((data) => {
              setDataSource(data, setOptionValue);
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
                    const Value = v as ProductsInterface;

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

export default FormSourcesAdding;
