import React from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputMui from "../../../components/ReactHookForm/Components/InputMui";
import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../helpers/helperFunction";
import { FormValueAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./ContactDetailsFormAT.module.scss";
function ContactDetailsFormAT() {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValueAddTraineeInterface>();
  return (
    <div className={classNameMaker(ST)}>
      <h3>Contact Details</h3>

      <Grid container item md={12} flexDirection="column" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputMui
              control={control}
              name="phoneNumber"
              label="Phone Number"
            />
          </Grid>
          <Grid item md={4}>
            <InputMui control={control} name="email" label="Email" />
          </Grid>
          <Grid item md={4}>
            <InputMui control={control} name="address" label="Address" />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputMui control={control} name="numAddress" label="Home Number" />
          </Grid>
          <Grid item md={4}>
            <InputMui control={control} name="city" label="City" />
          </Grid>
          <Grid item md={4}>
            <InputMui control={control} name="country" label="Country" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactDetailsFormAT;
