import React, { useState } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { setSomeKeyStateTrue } from "../../../../helpers/helperFunction";
import { ActiveForm } from "../DialogsFormsFC";

function UpperButtonsForm({
  setActiveForm,
}: {
  setActiveForm: React.Dispatch<React.SetStateAction<ActiveForm>>;
}) {
  const { Button } = FormComponetsExportMui;

  const [activeButton, setActiveButton] = useState({
    addEvent: true,
    addTask: false,
  });

  const { Grid } = UIComponentsExportMui;
  const style = {
    fontSize: "1.2rem",
    width: "10rem",
    borderBottom: `solid 3px `,
  };
  const onClick = (key: ActiveForm) => {
    setActiveForm(key);
    setActiveButton(setSomeKeyStateTrue(activeButton, key));
  };

  return (
    <Grid container item justifyContent="center" textAlign="center">
      <Grid container item md={10} justifyContent="space-evenly">
        <Grid item md={5}>
          <Button
            onClick={() => onClick("addEvent")}
            style={{
              ...style,
              borderBottomColor: `${
                activeButton["addEvent"] ? "#0865c3" : "grey"
              }`,
            }}
          >
            Add Event
          </Button>
        </Grid>
        <Grid item md={5}>
          <Button
            onClick={() => onClick("addTask")}
            style={{
              ...style,
              borderBottomColor: `${
                activeButton["addTask"] ? "#0865c3" : "grey"
              }`,
            }}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default UpperButtonsForm;
