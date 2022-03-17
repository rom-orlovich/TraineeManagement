import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import * as yup from "yup/";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormComponetsExportMui } from "../MUI/FormComponetsExport/FormComponetsExportMui";
import InputMui from "./Components/InputMui";
import Form from "./Components/FormMui";
import FormProviderMui from "./Components/FromProviderMui";
import SelectInputMui from "./Components/SelectInputMui";
import DatePickerMui from "./Components/DatePickerMui";
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
    <FormProviderMui<FormValues>
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
          <InputMui
            control={values.control}
            label="Name"
            name="name"
            type="text"
          />
          <SelectInputMui
            control={values.control}
            style={{ width: "10rem" }}
            label="Gender"
            name="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <DatePickerMui
            control={values.control}
            name="birthday"
            label="Birthday"
          ></DatePickerMui>
          <Button type="submit">SUB</Button>
        </Form>
      )}
    </FormProviderMui>
  );
}

export default FormExample;
