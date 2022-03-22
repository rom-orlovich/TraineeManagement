import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from "yup/";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormComponetsExportMui } from "../MUI/FormComponetsExport/FormComponetsExportMui";
import InputRHF from "./Components/InputRHF";
import Form from "./Components/FormRHF";
import FormProviderRHF from "./Components/FromProviderRHF";
import SelectInputRHF from "./Components/SelectInputRHF";
import DatePickerRHF from "./Components/DatePickerRHF";
interface FormValues {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
}
const frominput: FormValues = {
  name: "",
  lastName: "",
  email: "",
  gender: "",
  birthday: "",
};
const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string(),
  email: yup.string().email(),
  gender: yup.string().required(),
  birthday: yup.string().nullable().required("Please Enter Birthday"),
});
const { Button } = FormComponetsExportMui;
function FormExample() {
  const m = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <FormProviderRHF<FormValues>
      values={{
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues: frominput,
      }}
    >
      {(values: UseFormReturn<FormValues>) => (
        <Form
          submitFun={values.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <InputRHF
            control={values.control}
            label="Name"
            name="name"
            type="text"
          />
          <SelectInputRHF
            control={values.control}
            style={{ width: "10rem" }}
            label="Gender"
            name="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <DatePickerRHF
            control={values.control}
            name="birthday"
            label="Birthday"
          ></DatePickerRHF>
          <Button type="submit">SUB</Button>
        </Form>
      )}
    </FormProviderRHF>
  );
}

export default FormExample;
