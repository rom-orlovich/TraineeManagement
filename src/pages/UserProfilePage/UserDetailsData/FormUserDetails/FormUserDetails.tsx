import React from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";

import { classNameMaker } from "../../../../helpers/helperFunction";
import AddressDetails from "./AddressDetails/AddressDetails";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ST from "./FormUserDetails.module.scss";
import FormProviderMui from "../../../../components/ReactHookForm/Components/FromProviderMui";
import { FormValues, yupResolverSchema } from "./FormValues";
import Form from "../../../../components/ReactHookForm/Components/FormMui";
import { UseFormReturn } from "react-hook-form";

const { Button } = FormComponetsExportMui;
const { Grid } = UIComponentsExportMui;

function FormUserDetails() {
  return (
    <FormProviderMui values={{ mode: "onBlur", resolver: yupResolverSchema }}>
      {(values: UseFormReturn<FormValues>) => {
        return (
          <Form
            className={classNameMaker(ST.form)}
            submitFun={values.handleSubmit((data) => {
              let age =
                new Date().getFullYear() -
                new Date(data.birthday).getFullYear();
              values.setValue("age", age);
            })}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              className={classNameMaker(ST.from_container)}
            >
              <Grid item sm={5} xs={4}>
                <PersonalDetails
                  className={classNameMaker(
                    ST.userProfilePage_personalData_details
                  )}
                />
              </Grid>
              <Grid item sm={5} xs={4}>
                <AddressDetails
                  className={classNameMaker(
                    ST.userProfilePage_personalData_address
                  )}
                />
              </Grid>

              <Grid item sm={1} xs>
                <Button type="submit" style={{ paddingLeft: "1rem" }}>
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </FormProviderMui>
  );
}

export default FormUserDetails;
