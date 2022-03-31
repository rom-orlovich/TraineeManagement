import React, { useState } from "react";
import { NestedValue, useForm, UseFormReturn } from "react-hook-form";
import * as yup from "yup/";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormComponetsExportMui } from "../MUI/FormComponetsExport/FormComponetsExportMui";
import InputRHF from "./Components/InputRHF";
import FormRHF from "./Components/FormRHF";
import FormProviderRHF from "./Components/FromProviderRHF";

import { Autocomplete, TextField } from "@mui/material";
import AutocompleteRHF from "./Components/AutocompleteRHF";
interface Option {
  label: string;
  value: string;
}
// const options = ["ssd", "Asdasd"];
const options: Option[] = [
  { label: "s", value: "t" },
  { label: "g", value: "r" },
  { label: "b", value: "f" },
];
interface FormValues {
  autoCom: Option[];
}
const frominput: FormValues = {
  autoCom: [],
};

const { Button } = FormComponetsExportMui;
function FormExample() {
  const m = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(yup.object({ autoCom: yup.array() })),
  });
  const rhf = {
    options: options,
    freeSolo: true,
  };
  return (
    <FormProviderRHF<FormValues>
      values={{
        // resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: frominput,
      }}
    >
      {({ control, handleSubmit, setValue }: UseFormReturn<FormValues>) => (
        <FormRHF
          submitFun={handleSubmit((data) => {
            if (rhf.freeSolo) {
              const Data: Option =
                typeof data.autoCom === "string"
                  ? { label: data.autoCom, value: data.autoCom }
                  : { label: "", value: "" };
              console.log(Data);
            }
          })}
        >
          {/* <Autocomplete
            options={options}
            renderInput={(parma) => {
              return <TextField {...parma} />;
            }}
            multiple
            freeSolo
            getOptionLabel={(o)=>{return o}}
          
            value={state||""}
         
          /> */}
          <AutocompleteRHF
            control={control}
            name="autoCom"
            autoCompletePropsMui={{
              options: options,
              freeSolo: true,
            }}
          />

          <Button type="submit">submit</Button>
        </FormRHF>
      )}
    </FormProviderRHF>
  );
}

export default FormExample;
