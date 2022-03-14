import React from "react";
import { FormComponents } from "../../../../components/Form/SelectInput/MuiForm/MuiFormComponets";
const { FormControl, TextField } = FormComponents;
function FormAddressDetails() {
  return (
    <form>
      <TextField
        label="First Name"
        color="primary"
        variant="outlined"
        size="small"
      ></TextField>
    </form>
  );
}

export default FormAddressDetails;
