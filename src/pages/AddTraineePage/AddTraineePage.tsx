import { UseFormReturn } from "react-hook-form";
import { UIComponentsExportMui } from "../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import Form from "../../components/ReactHookForm/Components/FormMui";
import FormProviderMui from "../../components/ReactHookForm/Components/FromProviderMui";

import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";

import ContactDetailsFormAT from "./ContactDetailsFormAT/ContactDetailsFormAT";
import {
  FormValueAddTrainee,
  FormValueAddTraineeInterface,
  schema,
} from "./FormValuesAddTrainee";
import PersonalDetailsFormAT from "./PersonalDetailsFormAT/PersonalDetailsFormAT";
import SuscribeDetailsFormAT from "./SuscribeDetailsFormAT/SuscribeDetailsFormAT";
import ST from "./AddTraineePage.module.scss";
function AddTraineePage({ className }: propsType) {
  const { Grid } = UIComponentsExportMui;
  return (
    <section className={classNameMaker(ST.page_form, className)}>
      <FormProviderMui
        values={{
          defaultValues: FormValueAddTrainee,
          mode: "onBlur",
          resolver: schema,
        }}
      >
        {({ handleSubmit }: UseFormReturn<FormValueAddTraineeInterface>) => {
          return (
            <Form
              style={{ height: "100%" }}
              submitFun={handleSubmit((data) => {
                console.log(data);
              })}
            >
              <Grid container height="100%" marginTop="1rem">
                <Grid container item md={8} flexDirection="column" spacing={6}>
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
              </Grid>
            </Form>
          );
        }}
      </FormProviderMui>
    </section>
  );
}

export default AddTraineePage;
