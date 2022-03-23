import { DayCellContentArg } from "@fullcalendar/react";
import React, { useState } from "react";
import DialogMui from "../../../components/MUI/UIComponents/Dialog";
import { useGetDialogWithOpenState } from "../../../helpers/HelperHooks";
import DialogAddEventForm from "../DialogAddEvent/DialogAddEvent";
import { FullCalenderComponentsUtilites } from "./FullCalenderComonents";
const { FullCalendar, dayGridPlugin } = FullCalenderComponentsUtilites;
function FullCalender() {
  const { setStateIsOpen, stateIsOpen, DialogMui } =
    useGetDialogWithOpenState();
  const injectCellContent = (args: DayCellContentArg) => {
    return (
      <div>
        <button
          onClick={() => {
            setStateIsOpen(true);
          }}
        >
          {args.dayNumberText}
        </button>
      </div>
    );
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="100%"
        dayCellContent={injectCellContent}
      />
      <DialogMui title="hey">
        <DialogAddEventForm />
      </DialogMui>
    </>
  );
}

export default FullCalender;
