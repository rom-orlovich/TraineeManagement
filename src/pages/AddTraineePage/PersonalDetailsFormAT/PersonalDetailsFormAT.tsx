import React from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputMui from "../../../components/ReactHookForm/Components/InputMui";
import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../helpers/helperFunction";
import { FormValueAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./PersonalDetailsFormAT.module.scss";
function PersonalDetailsFormAT({ className }: { className?: string }) {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValueAddTraineeInterface>();
  return (
    <div className={classNameMaker(ST.personal_Details)}>
      <h3>Personal Details </h3>
      <Grid container item md={12} flexDirection="column" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputMui control={control} name="firstName" label="First Name" />
          </Grid>

          <Grid item md={4}>
            <InputMui control={control} name="lastName" label="LastName" />
          </Grid>

          <Grid item md={4}>
            <InputMui control={control} name="gender" label="Gender" />
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputMui control={control} name="birthday" label="Birthday" />
          </Grid>

          <Grid item md={4}>
            <InputMui control={control} name="age" label="Age" />
          </Grid>

          <Grid item md={4}>
            <InputMui
              control={control}
              name="identifyNumber"
              label="identify Number"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PersonalDetailsFormAT;
