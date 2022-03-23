import SelectInput from "@mui/material/Select/SelectInput";
import React, { useEffect } from "react";
import { UIComponentsExportMui } from "../../../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../../../components/ReactHookForm/UtilitesRHF";
import { optionSelect } from "../../../../../../DummyData/DummyData";
import { FormValuesUserProfileInterface } from "../../FormValuesUserProfile";
const { useFormContext } = UtilitesRHF;
const { Grid } = UIComponentsExportMui;
function FormPerosnalDetails() {
  const { control } = useFormContext<FormValuesUserProfileInterface>();

  return (
    <Grid container spacing={2} flexDirection="column">
      <Grid container item md={12} flexDirection="row">
        <Grid item md={4}>
          <InputRHF
            variant="standard"
            name="firstName"
            label="First Name"
            control={control}
          />
        </Grid>
        <Grid item md={4}>
          <InputRHF
            variant="standard"
            name="familyName"
            label="Family Name"
            control={control}
          />
        </Grid>
        <Grid item md={4}>
          <SelectInputRHF
            variant="standard"
            defaultValue="male"
            options={optionSelect[4].options}
            name="gender"
            label={optionSelect[4].name}
            control={control}
          />
        </Grid>
      </Grid>
      <Grid container item md={12} flexDirection="row">
        <Grid item md={4}>
          <DatePickerRHF
            datePicker={{
              label: "Birthday",
              textFieldProps: { variant: "standard" },
            }}
            name="birthday"
            control={control}
          />
        </Grid>
        <Grid item md={4}>
          <InputRHF
            variant="standard"
            focused
            name="age"
            label="Age"
            control={control}
          />
        </Grid>

        <Grid item md={4}>
          <InputRHF
            variant="standard"
            name="identifier"
            label="Identifier Number"
            control={control}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FormPerosnalDetails;
