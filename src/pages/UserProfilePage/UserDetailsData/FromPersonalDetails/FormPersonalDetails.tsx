import { SelectOption } from "@mui/material/node_modules/@mui/base";
import React, { useState } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { propsType } from "../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { useGetSelectInputMui } from "../../../../helpers/HelperHooks";
import ST from "./FormPersonalDetails.module.scss";
const { FormControl, TextField, FormGroup, MenuItem } = FormComponetsExportMui;
const GenderOption: SelectOption<"male" | "female">[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "female" },
];

function FormPersonalDetails(className: propsType) {
  const { SelectElement, stateSelect } = useGetSelectInputMui(GenderOption);
  const props = {
    color: "primary",
    variant: "outlined",
    size: "small",
  };
  return (
    <>
      <FormGroup row className={classNameMaker(ST.FromGroup)}>
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

      <FormGroup row className={classNameMaker(ST.FromGroup)}>
        <TextField
          label="Birthday"
          color="primary"
          variant="outlined"
          size="small"
          type="datetime-local"
        ></TextField>
        <TextField
          label="Age"
          color="primary"
          variant="outlined"
          size="small"
          type="number"
          style={{ width: "5rem" }}
        ></TextField>
        <TextField
          label="Identifier Number"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
      </FormGroup>
      <FormGroup row>
        <TextField
          label="Email"
          color="primary"
          variant="outlined"
          size="small"
          type="email"
        ></TextField>
        <TextField
          label="Phone Number"
          color="primary"
          variant="outlined"
          size="small"
          type="tel"
        ></TextField>
      </FormGroup>
    </>
  );
}

export default FormPersonalDetails;
