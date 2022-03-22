import SelectInput from "@mui/material/Select/SelectInput";
import React, { useEffect } from "react";
import { UIComponentsExportMui } from "../../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../../../components/ReactHookForm/UtilitesRHF";
import { FormValuesUserProfileInterface } from "../../FormValuesUserProfile";
const { useFormContext } = UtilitesRHF;
const { Grid } = UIComponentsExportMui;
function FormAddressDetails() {
  const { control } = useFormContext<FormValuesUserProfileInterface>();

  return (
    <Grid container spacing={2} flexDirection="row">
      <Grid item>
        <InputRHF
          variant="standard"
          name="email"
          label="Email"
          control={control}
          type="email"
        />
      </Grid>
      <Grid item>
        <InputRHF
          variant="standard"
          name="phoneNumber"
          label="Phone Number"
          control={control}
          type="tel"
        />
      </Grid>
      <Grid item>
        <InputRHF
          variant="standard"
          name="address"
          label="Address"
          control={control}
          // style={{ width: "15rem" }}
        />
      </Grid>
      <Grid item>
        <InputRHF
          variant="standard"
          name="numHome"
          label="Number"
          control={control}
          // style={{ width: "6rem" }}
        />
      </Grid>

      <Grid item>
        <InputRHF
          variant="standard"
          name="city"
          label="City"
          control={control}
        />
      </Grid>
      <Grid item>
        <InputRHF
          variant="standard"
          name="country"
          label="Country"
          control={control}
        />
      </Grid>
      <Grid item>
        <InputRHF variant="standard" name="zip" label="Zip" control={control} />
      </Grid>
    </Grid>
  );
}

export default FormAddressDetails;
