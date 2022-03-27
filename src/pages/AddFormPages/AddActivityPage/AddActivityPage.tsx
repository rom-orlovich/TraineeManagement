import { UseFormReturn } from "react-hook-form";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import Form from "../../../components/ReactHookForm/Components/FormRHF";
import FormProviderRHF from "../../../components/ReactHookForm/Components/FromProviderRHF";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import AddIncomeForm from "./AddIncomeForm/AddIncomeForm";
import {
  FormValuesAddActivity,
  FormValuesAddActivityInterface,
  schema,
} from "./FormValuesAddActivity";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";

import InputRHF from "../../../components/ReactHookForm/Components/InputRHF";
import FooterFormButtons from "../FooterFormButtons/FooterFormButtons";
import ST from "./AddActivityPage.module.scss";
import { optionSelect } from "../../../DummyData/DummyData";

import { useGetManageSelectInputState } from "../../../helpers/HelperHooks";

function AddActivityPage({ className }: propsType) {
  const incomeOrExpenseDisplay = {
    income: <AddIncomeForm />,
    expense: <AddExpenseForm />,
  };
  const { Grid } = UIComponentsExportMui;
  const { state, el: SelectInputMui } = useGetManageSelectInputState<
    "income" | "expense"
  >(optionSelect[11]);

  return (
    <section className={classNameMaker(ST.page_form, className)}>
      <FormProviderRHF
        values={{
          defaultValues: FormValuesAddActivity,
          mode: "onBlur",
          resolver: schema,
        }}
      >
        {({
          setValue,
          getValues,
          handleSubmit,
          control,
          reset,
        }: UseFormReturn<FormValuesAddActivityInterface>) => {
          return (
            <Form
              style={{ height: "100%" }}
              submitFun={handleSubmit((data) => {
                console.log(data);
                reset();
              })}
            >
              <Grid container height="100%">
                <Grid container item justifyContent="flex-end">
                  <Grid item>
                    <SelectInputMui />
                  </Grid>
                </Grid>
                <Grid item md={12}>
                  {incomeOrExpenseDisplay[state]}
                </Grid>

                <Grid item md={12} marginTop="0.5rem">
                  <InputRHF
                    control={control}
                    name="describe"
                    label="Describe"
                    multiline
                    fullWidth
                    rows={5}
                  />
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

export default AddActivityPage;
