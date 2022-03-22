import React from "react";
import {
  FormComponetsExportMui,
  smallWidthStyle,
} from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import { optionSelect } from "../../../../DummyData/DummyData";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { FormValuesAddLeadInterface } from "../FormValuesAddLead";
import ST from "./ContactDetailsFormAL.module.scss";
function ContactDetailsFormAL() {
  const { Grid } = UIComponentsExportMui;
  const { FormGroup } = FormComponetsExportMui;
  const { useFormContext } = UtilitesRHF;
  const { control } = useFormContext<FormValuesAddLeadInterface>();

  return (
    <div className={classNameMaker(ST)}>
      <h3>Contact Details</h3>

      <Grid container item flexDirection="row" columns={15}>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="city"
            label="City"
          />
        </Grid>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="country"
            label="Country"
          />
        </Grid>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            control={control}
            name="phoneNumber"
            label="Phone Number"
            type="tel"
          />
        </Grid>
        <Grid item md={3}>
          <InputRHF
            variant="standard"
            type="email"
            control={control}
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item md={3}>
          <SelectInputRHF
            variant="standard"
            options={optionSelect[6].options}
            control={control}
            name="source"
            label={optionSelect[6].name}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactDetailsFormAL;
