import React from "react";
import {
  FormComponetsExportMui,
  smallWidthStyle,
} from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import DatePickerRHF from "../../../../components/ReactHookForm/Components/DatePickerRHF";
import InputRHF from "../../../../components/ReactHookForm/Components/InputRHF";
import SelectInputRHF from "../../../../components/ReactHookForm/Components/SelectInputRHF";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";
import {
  optionSelect,
  productsListPrice,
} from "../../../../DummyData/DummyData";
import {
  classNameMaker,
  getExactPriceProductList,
} from "../../../../helpers/helperFunction";
import { FormValuesAddActivityInterface } from "../FormValuesAddActivity";
import ST from "./AddIncomeForm.module.scss";
function AddIncomeForm() {
  const { Grid } = UIComponentsExportMui;

  const { useFormContext } = UtilitesRHF;
  const { control, setValue, getValues } =
    useFormContext<FormValuesAddActivityInterface>();

  const productsValues = {
    nutrition: 200,
    trainingPlan: 100,
    personalTraining: 150,
  };

  return (
    <div className={classNameMaker(ST.heading)}>
      <h3>Add Income</h3>

      <Grid container item flexDirection="row" md={10} rowSpacing={2}>
        <Grid container item>
          <Grid item md={4}>
            <DatePickerRHF
              variant="standard"
              control={control}
              name="date"
              label="Date"
            />
          </Grid>
          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="nameBuyer"
              label="Name Buyer"
            />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid item md={4}>
            <SelectInputRHF
              onChange={({ target }) => {
                setValue("nameProduct", target.value);
                setValue(
                  "price",
                  getExactPriceProductList(productsListPrice, target.value) +
                    "$"
                );
              }}
              options={optionSelect[7].options}
              variant="standard"
              control={control}
              name="nameProduct"
              label="Name Product"
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
          <Grid item md={4}>
            <SelectInputRHF
              variant="standard"
              options={optionSelect[9].options}
              control={control}
              name="paymentMethod"
              label="Payment Method"
            />
          </Grid>

          <Grid item md={4}>
            <InputRHF
              variant="standard"
              control={control}
              name="totalPrice"
              label="Total Price"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddIncomeForm;
