import { UseFormReturn } from "react-hook-form";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import Form from "../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../components/ReactHookForm/Components/FromProviderRHF";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import ContactDetailsFormAT from "./ContactDetailsFormAT/ContactDetailsFormAT";
import {
  FormValuesAddTrainee,
  FormValuesAddTraineeInterface,
  schema,
} from "./FormValuesAddTrainee";
import PersonalDetailsFormAT from "./PersonalDetailsFormAT/PersonalDetailsFormAT";
import SuscribeDetailsFormAT from "./SuscribeDetailsFormAT/SuscribeDetailsFormAT";
import ST from "./AddTraineePage.module.scss";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import FooterFormButtons from "../FooterFormButtons/FooterFormButtons";
function AddTraineePage({ className }: propsType) {
  const { Grid } = UIComponentsExportMui;
  const { Button } = FormComponetsExportMui;
  return (
    <section className={classNameMaker(ST.page_form, className)}>
      <FormProviderRHF
        values={{
          defaultValues: FormValuesAddTrainee,
          mode: "onBlur",
          resolver: schema,
        }}
      >
        {({ handleSubmit }: UseFormReturn<FormValuesAddTraineeInterface>) => {
          return (
            <Form
              style={{ height: "100%" }}
              submitFun={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <Grid container height="100%" marginTop="0.5rem">
                <Grid container item md={8} flexDirection="column" spacing={4}>
                  <Grid item>
                    <PersonalDetailsFormAT />
                  </Grid>
                  <Grid item>
                    <ContactDetailsFormAT />
                  </Grid>
                </Grid>
                <Grid container item md={4}>
                  <SuscribeDetailsFormAT />
                </Grid>
                <FooterFormButtons />
              </Grid>
            </Form>
          );
        }}
      </FormProviderRHF>
    </section>
  );
}

export default AddTraineePage;
