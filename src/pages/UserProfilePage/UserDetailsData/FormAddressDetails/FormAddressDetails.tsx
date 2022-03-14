import React from "react";
import { FormComponents } from "../../../../components/Form/SelectInput/MuiForm/MuiFormComponets";
import ST from "./FormAddressDetails.module.scss";
const { FormControl, TextField, FormGroup } = FormComponents;
function FormAddressDetails() {
  return (
    <form>
      <FormGroup row>
        <TextField
          label="Address"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
        <TextField
          label="Num"
          color="primary"
          variant="outlined"
          type="number"
          size="small"
          style={{ width: "5rem" }}
        ></TextField>
        <TextField
          label="City"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
      </FormGroup>
      <FormGroup row>
        <TextField
          label="Country"
          color="primary"
          variant="outlined"
          size="small"
        ></TextField>
        <TextField
          label="Zip"
          color="primary"
          variant="outlined"
          type="number"
          size="small"
          style={{ width: "5rem" }}
        ></TextField>
      </FormGroup>
    </form>
  );
}

export default FormAddressDetails;
