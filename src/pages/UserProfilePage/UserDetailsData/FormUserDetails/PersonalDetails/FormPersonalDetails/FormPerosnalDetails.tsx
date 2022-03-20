import SelectInput from "@mui/material/Select/SelectInput";
import React, { useEffect } from "react";
import { UIComponentsExportMui } from "../../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerMui from "../../../../../../components/ReactHookForm/Components/DatePickerMui";
import InputMui from "../../../../../../components/ReactHookForm/Components/InputMui";
import SelectInputMui from "../../../../../../components/ReactHookForm/Components/SelectInputMui";
import { UtilitesRHF } from "../../../../../../components/ReactHookForm/UtilitesRHF";
import { FormValues } from "../../FormValues";
const { useFormContext } = UtilitesRHF;
const { Grid } = UIComponentsExportMui;
function FormPerosnalDetails() {
  const { control, getValues } = useFormContext<FormValues>();

  return (
    <Grid container wrap="wrap" spacing={1}>
      <Grid item>
        <InputMui name="firstName" label="First Name" control={control} />
      </Grid>
      <Grid item>
        <InputMui name="familyName" label="Family Name" control={control} />
      </Grid>
      <Grid item>
        <SelectInputMui
          defaultValue=""
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          name="gender"
          label="Gender"
          control={control}
        />
      </Grid>
      <Grid item>
        <DatePickerMui name="birthday" label="Birthday" control={control} />
      </Grid>
      <Grid item>
        <InputMui
          focused
          name="age"
          label="Age"
          control={control}
          type="number"
          style={{ width: "5rem" }}
        />
      </Grid>
      <Grid item>
        <InputMui
          name="identifier"
          label="Identifier Number"
          control={control}
        />
      </Grid>
      <Grid item>
        <InputMui name="email" label="Email" control={control} type="email" />
      </Grid>
      <Grid item>
        <InputMui
          name="phoneNumber"
          label="Phone Number"
          control={control}
          type="tel"
        />
      </Grid>
    </Grid>
  );
}

export default FormPerosnalDetails;
