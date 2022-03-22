import React from "react";
import {
  FormComponetsExportMui,
  smallWidthStyle,
} from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { optionSelect } from "../../../../DummyData/DummyData";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { FormValuesAddTraineeInterface } from "../FormValuesAddTrainee";
import ST from "./PersonalDetailsFormAT.module.scss";
function PersonalDetailsFormAT({ className }: { className?: string }) {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValuesAddTraineeInterface>();
  return (
    <div className={classNameMaker(ST.personal_Details)}>
      <h3>Personal Details </h3>
      <Grid container item md={12} flexDirection="row" spacing={2}>
        <Grid container item spacing={2}>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="firstName"
              label="First Name"
            />
          </Grid>

          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="lastName"
              label="LastName"
            />
          </Grid>

          <Grid item md={4}>
            <SelectInputRHF
              variant="standard"
              options={optionSelect[4].options}
              control={control}
              name="gender"
              label={optionSelect[4].name}
            />
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item md={4}>
            <DatePickerRHF
              variant="standard"
              control={control}
              name="birthday"
              label="Birthday"
            />
          </Grid>

          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="age"
              label="Age"
            />
          </Grid>

          <Grid item md={4}>
            <InputRHF
              variant="standard"
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
