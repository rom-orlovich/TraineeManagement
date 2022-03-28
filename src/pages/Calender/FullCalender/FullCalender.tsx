import { classNameMaker } from "../../../helpers/helperFunction";
import {
  useFollowState,
  useGetDialogWithOpenState,
} from "../../../helpers/HelperHooks";

import { ExportComponentsFC } from "./helpersFC/ExportComponentsFC";

import { useDateCellClick, useRenderEventContent } from "./helpersFC/FCHooks";

import useReducerFCHooks from "../ReducerFC/RedcuerFCHooks";
import ST from "./FullCalender.module.scss";
import DialogsFormsFC from "../DialogsFormsFC/DialogsFormsFC";
import { getTypeAndIdFromEvent } from "./helpersFC/HelperFunFC";
const { FullCalendar, dayGridPlugin, interactionPlugin, timeGridPlugin } =
  ExportComponentsFC;

function FullCalender() {
  const { setStateIsOpen, DialogMui } = useGetDialogWithOpenState();

  const {
    stateFullCalender,
    setCurEventClick,
    setInfo,
    setNewEvent,
    setNewTask,
    removeEvent,
    removeTask,
  } = useReducerFCHooks();
  const dateClick = useDateCellClick(setStateIsOpen, setInfo);
  const { eventsFC, eventsManual, tasksManual, curClickFC, curEventClick } =
    stateFullCalender;
  // useFollowState({ stateFullCalender: stateFullCalender });
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        eventClick={(event) => {
          if (event.jsEvent.composedPath().length === 32) return;
          setCurEventClick(event);
          setStateIsOpen(true);
        }}
        eventDidMount={(info) => {
          const { Type, id } = getTypeAndIdFromEvent(info.event);
          info.el.style.backgroundColor =
            Type === "event" ? "#8f8fff" : "#ff2929";
        }}
        eventContent={useRenderEventContent(
          eventsManual,
          tasksManual,
          removeEvent,
          removeTask
        )}
        initialView="dayGridMonth"
        height="100%"
        dateClick={dateClick}
        events={eventsFC}
        viewClassNames={classNameMaker(ST)}
        headerToolbar={{
          left: "prev today next",
          center: "title",
          right: "timeGridDay timeGridWeek dayGridMonth",
        }}
      />
      <DialogMui>
        <DialogsFormsFC
          curDate={curClickFC?.date || new Date()}
          setEvent={setNewEvent}
          setNewTask={setNewTask}
          setDialogClose={setStateIsOpen}
          stateFullCalender={stateFullCalender}
        />
      </DialogMui>
    </>
  );
}

export default FullCalender;
