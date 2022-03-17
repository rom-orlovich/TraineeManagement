import React from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";
import { classNameMaker } from "../../../helpers/helperFunction";
import AddressDetails from "./AddressDetails";
import PersonalDetails from "./PersonalDetails";
import ST from "./FormUserDetails.module.scss";
import FormProviderMui from "../../../components/ReactHookForm/Components/FromProviderMui";
import { FormValues, yupResolverSchema } from "./FormValues";
import Form from "../../../components/ReactHookForm/Components/FormMui";
import { UseFormReturn } from "react-hook-form";

const { Button } = FormComponetsExportMui;
const { Grid } = UIComponentsExportMui;

function FormUserDetails() {
  return (
    <FormProviderMui values={{ mode: "onBlur", resolver: yupResolverSchema }}>
      {(values: UseFormReturn<FormValues>) => {
        <Form
          submitFun={values.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Grid container columns={2}>
            <Grid item>
              <PersonalDetails
                className={classNameMaker(
                  ST.userProfilePage_personalData_details
                )}
              />
            </Grid>
            <Grid item>
              <AddressDetails
                className={classNameMaker(
                  ST.userProfilePage_personalData_address
                )}
              />
            </Grid>
          </Grid>
          <div>
            <Button type="submit" style={{ paddingLeft: "1rem" }}>
              Save Changes
            </Button>
          </div>{" "}
        </Form>;
      }}
    </FormProviderMui>
  );
}

export default FormUserDetails;
