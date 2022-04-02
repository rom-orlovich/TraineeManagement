import React from "react";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { optionSelect } from "../../../../DummyData/DummyData";
import { useGetSelectInputMui } from "../../../../helpers/HelperHooks";
import FormExpensesAdding from "./FormsOA/FormExpensesAdding";
import FormProductsAdding from "./FormsOA/FormProductsAdding";
import FormSourcesAdding from "./FormsOA/FormSourcesAdding";

import { EditOrAddOptionsFormsType } from "./FormsOA/FormsOATypes";
const { Grid } = UIComponentsExportMui;

function OptionsAdding() {
  const { stateSelect, setStateSelect, SelectElement } = useGetSelectInputMui(
    optionSelect[12].options
  );

  const StateSelect = stateSelect as EditOrAddOptionsFormsType;
  const FormDisplay: { [keyof in EditOrAddOptionsFormsType]: JSX.Element } = {
    products: <FormProductsAdding />,
    expenses: <FormExpensesAdding />,
    sources: <FormSourcesAdding />,
  };
  return (
    <>
      <Grid container item flexDirection="row" md={12}>
        <Grid container item flexDirection="column" spacing={1.5}>
          <Grid item md={3}>
            <h3
              style={{
                fontWeight: "500",
                fontSize: "1.5rem",
              }}
            >
              Options Edit
            </h3>
          </Grid>
          <Grid
            container
            item
            flexDirection="row"
            alignContent="center"
            height="4rem"
          >
            <Grid container item md={2} alignContent="center">
              <SelectElement name="optionAdd" label="Option Add" />
            </Grid>
            <Grid
              container
              item
              md={10}
              flexDirection="row"
              alignContent="center"
            >
              {FormDisplay[StateSelect]}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default OptionsAdding;
