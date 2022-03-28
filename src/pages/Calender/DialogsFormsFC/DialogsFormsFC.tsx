import React, { useState } from "react";
import { UIComponentsExportMui } from "../../../components/MUI/UIComponentsExport/UIComponentsExportMui";
import { FullCalenderInitalState } from "../ReducerFC/TypesReducerFC";

import AddEventForm from "./AddEventForm/AddEventForm";
import { AddEventFormInterface } from "./AddEventForm/AddEventFormTypes";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import { AddTaskFormInterface } from "./AddTaskForm/AddTaskFormTypes";
import UpperButtonsForm from "./UpperButtonsForm/UpperButtonsForm";
import { useFollowState } from "../../../helpers/HelperHooks";
import { ActiveForm, FormDisplay } from "./DialogFormFCType";
import { getTypeAndIdFromEvent } from "../FullCalender/helpersFC/HelperFunFC";

const { Grid } = UIComponentsExportMui;
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
  // useFollowState({ stateFullCalender: stateFullCalender });
  const { curClickEventInfo, curEventClick, curTaskClick } = stateFullCalender;
  const { Type, id } = getTypeAndIdFromEvent(curClickEventInfo?.event);

  const activeTypeFormDisplay = {
    event: "addEvent" as const,
    task: "addTask" as const,
  };

  const [activeForm, setActiveForm] = useState<ActiveForm>(
    activeTypeFormDisplay[Type]
  );

  const propsForm = {
    curDate,
    setDialogClose,
  };
  const FormDisplay: FormDisplay = {
    addEvent: (
      <AddEventForm
        setEvent={setEvent}
        {...propsForm}
        existEvent={curEventClick}
      />
    ),

    addTask: (
      <AddTaskForm
        setNewTask={setNewTask}
        {...propsForm}
        existTask={curTaskClick}
      ></AddTaskForm>
    ),
  };

  return (
    <>
      <Grid container item>
        <UpperButtonsForm
          setActiveForm={setActiveForm}
          activeForm={activeForm}
        />
        <Grid container item>
          {FormDisplay[activeForm]}
        </Grid>
      </Grid>
    </>
  );
}

export default DialogsFormsFC;
