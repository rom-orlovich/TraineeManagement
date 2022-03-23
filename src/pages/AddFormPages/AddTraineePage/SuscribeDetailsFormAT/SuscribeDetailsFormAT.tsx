import React from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { FormValuesAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./SuscribeDetailsFormAT.module.scss";
function SuscribeDetailsFormAT() {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValuesAddTraineeInterface>();
  return (
    <div className={classNameMaker(ST)}>
      <h3>Suscribe Details</h3>

      <Grid container item md={12} flexDirection="row" spacing={2}>
        <Grid container item spacing={1}>
          <Grid item md={6}>
            <InputRHF
              variant="standard"
              control={control}
              name="plan"
              label="Plan"
            />
          </Grid>
          <Grid item md={6}>
            <InputRHF
              variant="standard"
              control={control}
              name="price"
              label="Price"
            />
          </Grid>
        </Grid>
        <Grid container item spacing={1}>
          <Grid item>
            <DatePickerRHF
              datePicker={{
                label: "Start Date",
                textFieldProps: { variant: "standard" },
              }}
              control={control}
              name="startingDate"
            />
          </Grid>
          <Grid item>
            <DatePickerRHF
              datePicker={{
                label: "End Date",
                textFieldProps: { variant: "standard" },
              }}
              control={control}
              name="endingDate"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SuscribeDetailsFormAT;
