import { border, width } from "@mui/system";
import React, { useState } from "react";
import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { useGetDialogWithOpenState } from "../../../helpers/HelperHooks";
import useReducerFCHooks from "../FullCalenderReducer/RedcuerFCHooks";
import AddEventForm from "./AddEventForm/AddEventForm";
import { AddEventFormInterface } from "./AddEventForm/AddEventFormTypes";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { AddTaskFormInterface } from "./AddTaskForm/AddTaskFormTypes";
import { EventsTypeValues } from "./DialogFormsTypes";
import UpperButtonsForm from "./UpperButtonsForm/UpperButtonsForm";
export type ActiveForm = "addEvent" | "addTask";
function DialogsFormsFC({
  curDate,
  setEvent,
  setDialogClose,
  setNewTask,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setEvent: (data: AddEventFormInterface) => void;
  setNewTask: (data: AddTaskFormInterface) => void;
}) {
  const { Button } = FormComponetsExportMui;

  const { Grid } = UIComponentsExportMui;

  const FormDisplay: { [keyof in ActiveForm]: JSX.Element } = {
    addEvent: (
      <AddEventForm
        curDate={curDate}
        setEvent={setEvent}
        setDialogClose={setDialogClose}
      />
    ),

    addTask: (
      <AddTaskForm
        curDate={curDate}
        setNewTask={setNewTask}
        setDialogClose={setDialogClose}
      ></AddTaskForm>
    ),
  };

  const [activeForm, setActiveForm] = useState<ActiveForm>("addEvent");

  return (
    <>
      <Grid container item>
        <UpperButtonsForm
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />
        <Grid container item>
          {FormDisplay[activeForm]}
        </Grid>
      </Grid>
    </>
  );
}

export default DialogsFormsFC;
