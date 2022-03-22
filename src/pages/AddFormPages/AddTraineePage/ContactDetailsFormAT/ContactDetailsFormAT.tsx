import React from "react";
import {
  FormComponetsExportMui,
  smallWidthStyle,
} from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { FormValuesAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./ContactDetailsFormAT.module.scss";
function ContactDetailsFormAT() {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValuesAddTraineeInterface>();

  return (
    <div className={classNameMaker(ST)}>
      <h3>Contact Details</h3>

      <Grid container item md={12} flexDirection="row" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="phoneNumber"
              label="Phone Number"
              type="tel"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              type="email"
              control={control}
              name="email"
              label="Email"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="address"
              label="Address"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="numAddress"
              label="Home Number"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="city"
              label="City"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="country"
              label="Country"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactDetailsFormAT;
