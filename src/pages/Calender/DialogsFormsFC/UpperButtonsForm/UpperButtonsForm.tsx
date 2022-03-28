import React, { useState } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { setSomeKeyStateTrue } from "../../../../helpers/helperFunction";
import { ActiveForm } from "../DialogFormFCType";

function UpperButtonsForm({
  setActiveForm,
  activeForm,
}: {
  setActiveForm: React.Dispatch<React.SetStateAction<ActiveForm>>;
  activeForm: ActiveForm;
}) {
  const { Button } = FormComponetsExportMui;
  const activeFormObj = {
    addEvent: true,
    addTask: false,
  };

  const { Grid } = UIComponentsExportMui;
  const style = {
    fontSize: "1.2rem",
    width: "10rem",
    borderBottom: `solid 3px `,
  };
  const onClick = (key: ActiveForm) => {
    setActiveForm(key);
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
                activeForm === "addEvent" ? "#0865c3" : "grey"
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
                activeForm === "addTask" ? "#0865c3" : "grey"
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
