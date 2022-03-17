import React from "react";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputMui from "../../../../components/ReactHookForm/Components/InputMui";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
const { useFormContext } = UtilitesRHF;
const { Grid } = UIComponentsExportMui;
function FormPerosnalDetailsExample() {
  const { control } = useFormContext();
  return (
    <Grid container>
      <Grid item>
        <InputMui name="firstName" label="First Name" control={control} />
      </Grid>
    </Grid>
  );
}

export default FormPerosnalDetailsExample;
