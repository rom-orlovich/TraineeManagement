import React from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";

import { classNameMaker } from "../../../../helpers/helperFunction";
import AddressDetails from "./AddressDetails/AddressDetails";
import PersonalDetails from "./PersonalDetails/PersonalDetails";

import FormProviderRHF from "../../../../components/ReactHookForm/Components/FromProviderRHF";
import {
  FormValuesUserProfileInterface,
  FormValuesUserProfile,
  yupResolverSchema,
} from "./FormValuesUserProfile";
import Form from "../../../../components/ReactHookForm/Components/FormRHF";
import { UseFormReturn } from "react-hook-form";
import ST from "./FormUserDetails.module.scss";
const { Button } = FormComponetsExportMui;
const { Grid } = UIComponentsExportMui;

function FormUserDetails() {
  return (
    <FormProviderRHF
      values={{
        mode: "onBlur",
        resolver: yupResolverSchema,
        defaultValues: FormValuesUserProfile,
      }}
    >
      {(values: UseFormReturn<FormValuesUserProfileInterface>) => {
        return (
          <Form
            className={classNameMaker(ST.form)}
            submitFun={values.handleSubmit((data) => {
              let age =
                new Date().getFullYear() -
                new Date(data.birthday).getFullYear();
              values.setValue("age", age + "");
              console.log(data);
            })}
          >
            <Grid
              container
              className={classNameMaker(ST.from_container)}
              flexDirection="row"
            >
              <Grid item md={12} flexDirection="row">
                <PersonalDetails />
              </Grid>

              <Grid item md={12} flexDirection="row">
                <AddressDetails />
              </Grid>

              <Grid
                container
                item
                md={12}
                flexDirection="row"
                justifyContent="center"
              >
                <Grid item marginTop="1rem">
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ paddingLeft: "1rem" }}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </FormProviderRHF>
  );
}

export default FormUserDetails;
