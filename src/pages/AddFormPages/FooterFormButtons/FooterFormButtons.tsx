import React from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
const { Grid } = UIComponentsExportMui;
const { Button } = FormComponetsExportMui;
function FooterFormButtons() {
  return (
    <Grid
      padding="0 1rem"
      container
      item
      md={12}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid container item md={3} justifyContent="center">
        <Grid item>
          <Button
            size="small"
            variant="contained"
            type="submit"
            style={{ height: "3rem", width: "10rem" }}
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>

      <Grid container item md={3} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            type="submit"
            style={{ height: "3rem", width: "10rem" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FooterFormButtons;
