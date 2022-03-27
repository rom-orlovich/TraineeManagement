import React from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
const { Button } = FormComponetsExportMui;

const { Grid } = UIComponentsExportMui;
function FooterButtonsDialog({
  setDialogClose,
}: {
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Grid container item md={12} spacing={3} justifyContent="space-around">
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          onClick={() => setDialogClose(false)}
        >
          Cancel
        </Button>
      </Grid>

      <Grid item>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default FooterButtonsDialog;
