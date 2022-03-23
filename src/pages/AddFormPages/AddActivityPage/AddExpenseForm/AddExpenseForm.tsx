import React from "react";

import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import {
  expensesListPrice,
  optionSelect,
} from "../../../../DummyData/DummyData";
import {
  classNameMaker,
  getExactPriceProductList,
} from "../../../../helpers/helperFunction";
import { FormValuesAddActivityInterface } from "../FormValuesAddActivity";

import ST from "./AddExpenseForm.module.scss";
function AddExpenseForm({ className }: { className?: string }) {
  const { Grid } = UIComponentsExportMui;

  const { useFormContext } = UtilitesRHF;

  const { control, setValue, getValues } =
    useFormContext<FormValuesAddActivityInterface>();

  return (
    <div className={classNameMaker(ST.heading)}>
      <h3>Add Expnese </h3>
      <Grid container item flexDirection="row" md={10} rowSpacing={2}>
        <Grid container item>
          <Grid item md={4}>
            <DatePickerRHF
              datePicker={{
                label: "Date",
                textFieldProps: { variant: "standard" },
              }}
              control={control}
              name="date"
            />
          </Grid>
          <Grid item md={8}>
            <InputRHF
              variant="standard"
              control={control}
              name="paymentTo"
              label="paymentTo"
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item md={4}>
            <SelectInputRHF
              onChange={({ target }) => {
                setValue("nameExpense", target.value);
                setValue(
                  "price",
                  getExactPriceProductList(expensesListPrice, target.value) +
                    "$"
                );
              }}
              options={optionSelect[10].options}
              variant="standard"
              control={control}
              name="nameExpense"
              label="Name Expense"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="price"
              label="Price"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              onChange={({ target: { value } }) => {
                const quantity = +value;
                const price = parseFloat(getValues().price);
                setValue("quantity", quantity);
                setValue("totalPrice", price * quantity + "$");
              }}
              variant="standard"
              control={control}
              name="quantity"
              label="Quantity"
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item md={4}>
            <SelectInputRHF
              variant="standard"
              options={optionSelect[8].options}
              control={control}
              name="paymentType"
              label="Payment Type"
            />
          </Grid>
          <Grid item md={8}>
            <SelectInputRHF
              variant="standard"
              options={optionSelect[9].options}
              control={control}
              name="paymentMethod"
              label="Payment Method"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddExpenseForm;
