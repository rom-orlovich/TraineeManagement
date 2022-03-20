import React from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputMui from "../../../components/ReactHookForm/Components/InputMui";
import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../helpers/helperFunction";
import { FormValueAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./SuscribeDetailsFormAT.module.scss";
function SuscribeDetailsFormAT() {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValueAddTraineeInterface>();
  return (
    <div className={classNameMaker(ST)}>
      <h3>Suscribe Details</h3>

      <Grid container item md={12} flexDirection="column" spacing={2}>
        <Grid container item spacing={1}>
          <Grid item md={6}>
            <InputMui control={control} name="plan" label="Plan" />
          </Grid>
          <Grid item md={6}>
            <InputMui control={control} name="price" label="Price" />
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item>
            <InputMui
              control={control}
              name="startingDate"
              label="Start Date"
            />
          </Grid>
          <Grid item>
            <InputMui control={control} name="endingDate" label="End Date" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SuscribeDetailsFormAT;
