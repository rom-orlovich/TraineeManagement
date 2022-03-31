import { Autocomplete } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UseFormProps, UseFormReturn } from "react-hook-form";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import AutocompleteRHF from "../../../../components/ReactHookForm/Components/AutocompleteRHF";
import CheckBoxRHF from "../../../../components/ReactHookForm/Components/CheckBoxRHF";
import FormRHF from "../../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";

import { useFollowState } from "../../../../helpers/HelperHooks";
import { getOptionDisable, getOptionLabel, setData } from "./helperFunOA";

import {
  FormValuesProducts,
  defaultProductsValuesForm,
  producsOptions,
  ProductsInterface,
} from "./OptionAddingTypes";
const { Grid } = UIComponentsExportMui;
const { Button } = FormComponetsExportMui;
function FormProductsAdding() {
  const [optionsValue, setOptionValue] = useState(producsOptions);
  useFollowState({ optionsValue: optionsValue });
  const ObjForm: UseFormProps = {
    defaultValues: defaultProductsValuesForm,
    mode: "onBlur",
  };
  type stateFormType = "add" | "edit";
  const [stateForm, setStateForm] = useState<stateFormType>("add");
  const stateFormObj = {
    edit: {
      freeSolo: false,
      getOptionDisabled: undefined,

      button: (
        <Button type="submit" variant="contained">
          Edit
        </Button>
      ),
    },
    add: {
      freeSolo: true,
      getOptionDisabled: getOptionDisable,
      button: (
        <Button type="submit" variant="contained">
          Add
        </Button>
      ),
    },
  };
  const { button, ...props } = stateFormObj[stateForm];

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
              setData(data, setOptionValue);
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
                  setValueOnField={(v) => {
                    //set the value of the price according to the option select
                    if (!v) return;
                    const Value = v as ProductsInterface;
                    setValue("price", Value.price);
                    setValue("id", Value.id);
                  }}
                  autoCompletePropsMui={{
                    renderOption: (
                      { ...props },
                      { nameOption, id, ...options },
                      state
                    ) => {
                      // console.log(props, options, state);
                      return (
                        <li {...props} key={id}>
                          {nameOption}
                        </li>
                      );
                    },
                    isOptionEqualToValue: (option, value) => {
                      return option.id === value.id;
                    },
                    //set the value  textfield input which is different than cur options
                    setValueOnOptions: (v) => setValue("options", v),

                    getOptionLabel: getOptionLabel,
                    clearOnBlur: false,
                    options: optionsValue,
                    ...props,
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
                />
              </Grid>

              <Grid container item md={3} alignContent="flex-end">
                <CheckBoxRHF
                  control={control}
                  name="mode"
                  label="Edit"
                  checkboxMuiProps={{
                    checkboxProps: {
                      onChange: (e, check) => {
                        setValue("mode", check);
                        setStateForm(check ? "edit" : "add");
                        reset();
                      },
                    },
                  }}
                />
                {button}
                {/* <Button type="submit" variant="contained">
                  Submit
                </Button> */}
              </Grid>
            </Grid>
          </FormRHF>
        )}
      </FormProviderRHF>
    </>
  );
}

export default FormProductsAdding;
