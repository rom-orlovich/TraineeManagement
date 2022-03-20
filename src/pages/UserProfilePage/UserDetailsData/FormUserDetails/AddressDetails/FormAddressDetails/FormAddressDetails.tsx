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
function FormAddressDetails() {
  const { control, getValues } = useFormContext<FormValues>();

  return (
    <Grid container wrap="wrap">
      <Grid item>
        <InputMui
          name="address"
          label="Address"
          control={control}
          // style={{ width: "15rem" }}
        />
      </Grid>
      <Grid item>
        <InputMui
          name="numHome"
          label="Number"
          type="number"
          control={control}
          // style={{ width: "6rem" }}
        />
      </Grid>

      <Grid item>
        <InputMui name="city" label="City" control={control} />
      </Grid>
      <Grid item>
        <InputMui name="country" label="Country" control={control} />
      </Grid>
      <Grid item>
        <InputMui name="zip" label="Zip" control={control} />
      </Grid>
    </Grid>
  );
}

export default FormAddressDetails;
