import { SelectOption } from "@mui/material/node_modules/@mui/base";
import React, { useState } from "react";
import { FormComponents } from "../../../../components/Form/SelectInput/MuiForm/MuiFormComponets";
import { propsType } from "../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { useGetSelectInputMui } from "../../../../helpers/HelperHooks";

const { FormControl, TextField, FormGroup, MenuItem } = FormComponents;
const GenderOption: SelectOption<"male" | "female">[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "female" },
];

function FormPersonalDetails(className: propsType) {
  const { SelectElement, stateSelect } = useGetSelectInputMui(GenderOption);
  return (
    <form className={classNameMaker()}>
      <FormGroup row>
        <TextField
          label="First Name"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
        <TextField
          label="Family Name"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
        <SelectElement label="Gender" size="small"></SelectElement>
      </FormGroup>

      <FormGroup row>
        <TextField
          label="Birthday"
          color="primary"
          variant="outlined"
          size="small"
          type="date"
        ></TextField>
      </FormGroup>
    </form>
  );
}

export default FormPersonalDetails;
