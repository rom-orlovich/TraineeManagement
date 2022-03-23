import React from "react";
import {
  extraSmallWidthStyle,
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
import { FormValuesAddLeadInterface } from "../FormValuesAddLead";
import ST from "./PersonalDetailsFormAL.module.scss";
function PersonalDetailsFormAL({ className }: { className?: string }) {
  const { Grid } = UIComponentsExportMui;

  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValuesAddLeadInterface>();
  return (
    <div className={classNameMaker(ST.personal_Details)}>
      <h3>Personal Details </h3>
      <Grid container item columns={15} flexDirection="row">
        <Grid item md={3}>
          <DatePickerRHF
            datePicker={{
              label: "Date",
              textFieldProps: { variant: "standard" },
            }}
            control={control}
            name="date"
          />
        </Grid>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="firstName"
            label="First Name"
          />
        </Grid>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="lastName"
            label="LastName"
          />
        </Grid>
        <Grid item md={3}>
          <SelectInputRHF
            variant="standard"
            options={optionSelect[4].options}
            control={control}
            name="gender"
            label={optionSelect[4].name}
          />
        </Grid>

        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="age"
            label="Age"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default PersonalDetailsFormAL;
