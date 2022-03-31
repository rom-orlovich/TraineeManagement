import { UseFormReturn } from "react-hook-form";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import FormRHF from "../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../components/ReactHookForm/Components/FromProviderRHF";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import ContactDetailsFormAL from "./ContactDetailsFormAL/ContactDetailsFormAL";
import {
  FormValuesAddLead,
  FormValuesAddLeadInterface,
  schema,
} from "./FormValuesAddLead";
import PersonalDetailsFormAL from "./PersonalDetailsFormAL/PersonalDetailsFormAL";
import FooterFormButtons from "../FooterFormButtons/FooterFormButtons";
import ST from "./AddLeadPage.module.scss";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import InputRHF from "../../../components/ReactHookForm/Components/InputRHF";
function AddLeadPage({ className }: propsType) {
  const { Grid } = UIComponentsExportMui;
  const { Button } = FormComponetsExportMui;

  return (
    <section className={classNameMaker(ST.page_form, className)}>
      <FormProviderRHF
        values={{
          defaultValues: FormValuesAddLead,
          mode: "onBlur",
          resolver: schema,
        }}
      >
        {({
          handleSubmit,
          control,
        }: UseFormReturn<FormValuesAddLeadInterface>) => {
          return (
            <FormRHF
              style={{ height: "100%" }}
              submitFun={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <Grid container height="100%" marginTop="0.5rem">
                <Grid item md={12}>
                  <PersonalDetailsFormAL />
                </Grid>
                <Grid item md={12}>
                  <ContactDetailsFormAL />
                </Grid>

                <Grid item md={12}>
                  <InputRHF
                    type=""
                    control={control}
                    name="notes"
                    label="Notes"
                    multiline
                    size="medium"
                    fullWidth
                    rows={5}
                  />
                </Grid>
                <FooterFormButtons />
              </Grid>
            </FormRHF>
          );
        }}
      </FormProviderRHF>
    </section>
  );
}

export default AddLeadPage;
