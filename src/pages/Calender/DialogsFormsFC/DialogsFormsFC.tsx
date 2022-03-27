import React, { useState } from "react";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { FullCalenderInitalState } from "../FullCalenderReducer/TypesReducerFC";

import AddEventForm from "./AddEventForm/AddEventForm";
import { AddEventFormInterface } from "./AddEventForm/AddEventFormTypes";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { AddTaskFormInterface } from "./AddTaskForm/AddTaskFormTypes";
import UpperButtonsForm from "./UpperButtonsForm/UpperButtonsForm";
export type ActiveForm = "addEvent" | "addTask";
function DialogsFormsFC({
  curDate,
  setEvent,
  setDialogClose,
  setNewTask,
  stateFullCalender,
}: {
  curDate: Date;
  setDialogClose: React.Dispatch<React.SetStateAction<boolean>>;
  setEvent: (data: AddEventFormInterface) => void;
  setNewTask: (data: AddTaskFormInterface) => void;
  stateFullCalender: FullCalenderInitalState;
}) {
  const { Grid } = UIComponentsExportMui;
  const { curEventClick, tasksManual, eventsManual, eventsFC } =
    stateFullCalender;
  const publicId = curEventClick?.event?._def.publicId
    ? curEventClick?.event?._def.publicId
    : "";

  const [type, id] = publicId.split("/");
  const objData = {
    event: eventsManual.find((el) => el.id === publicId),
    task: tasksManual.find((el) => el.id === publicId),
  };
  const dataEventsFC = eventsFC.find((el) => el.id === publicId);
  const dataEventFCtrue = dataEventsFC ? dataEventsFC : {};
  const eventProps = {
    ...objData["event"],
    dataEventsFC,
  };
  const propsForm = {
    curDate,
    setDialogClose,
  };

  const FormDisplay: { [keyof in ActiveForm]: JSX.Element } = {
    addEvent: <AddEventForm setEvent={setEvent} {...propsForm} />,

    addTask: <AddTaskForm setNewTask={setNewTask} {...propsForm}></AddTaskForm>,
  };

  const [activeForm, setActiveForm] = useState<ActiveForm>("addEvent");

  return (
    <>
      <Grid container item>
        <UpperButtonsForm setActiveForm={setActiveForm} />
        <Grid container item>
          {FormDisplay[activeForm]}
        </Grid>
      </Grid>
    </>
  );
}

export default DialogsFormsFC;
