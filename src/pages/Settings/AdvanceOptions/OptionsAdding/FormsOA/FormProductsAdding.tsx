import React, { useEffect, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import InputAdormentMui from "../../../../../components/MUI/FormCompnents/InputAdormentMui/InputAdormentMui";

import { UIComponentsExportMui } from "../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import AutocompleteRHF from "../../../../../components/ReactHookForm/Components/AutocompleteRHF";

import FormRHF from "../../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../../components/ReactHookForm/Components/FromProviderRHF";
import InputRHF from "../../../../../components/ReactHookForm/Components/InputRHF";

import {
  onChangeCheckProductsOA,
  setDataNotSource,
} from "./../helpersOA/helperFunOA";
import { useGetCheckBoxEditOrAdd } from "./../helpersOA/helperHooksOA";

import {
  FormValuesProducts,
  ProductsInterface,
  defaultProductsValuesForm,
  producsOptions,
} from "./FormsOATypes";
import {
  getOptionLabel,
  isOptionEqualToValue,
  renderOption,
} from "./AutoCompleteProps";

const { Grid } = UIComponentsExportMui;
const ObjForm: UseFormProps = {
  defaultValues: defaultProductsValuesForm,
  mode: "onBlur",
};
function FormProductsAdding() {
  const [optionsValue, setOptionValue] = useState(producsOptions);

  const [inputValue, setInputValue] = useState("");

  const { propsAutoComplete, CheckBoxButtons, setStateForm } =
    useGetCheckBoxEditOrAdd(optionsValue);

  return (
    <>
      <FormProviderRHF values={ObjForm}>
        {({
          handleSubmit,
          control,
          setValue,
          reset,
        }: UseFormReturn<FormValuesProducts>) => (
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
                    const Value = v as ProductsInterface;
                    setValue("price", Value.price);
                    setValue("id", Value.id);
                  }}
                  autoCompletePropsMui={{
                    onInputChange: (_, v) => setInputValue(v),
                    //set the  input the user enter to the field
                    setValueOnOptions: (v) => setValue("options", v),
                    renderOption: renderOption(setOptionValue),

                    isOptionEqualToValue: isOptionEqualToValue,
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
                onChange={onChangeCheckProductsOA(
                  setValue,
                  reset,
                  setStateForm
                )}
                checkBoxName="mode"
              />
            </Grid>
          </FormRHF>
        )}
      </FormProviderRHF>
    </>
  );
}

export default FormProductsAdding;
