import { classNameMaker } from "../../../helpers/helperFunction";
import {
  useFollowState,
  useGetDialogWithOpenState,
} from "../../../helpers/HelperHooks";

import { FullCalenderComponentsUtilites } from "./helpersFullCalenderHooks/FullCalenderComponents";

import {
  useDateCellClick,
  useRenderEventContent,
} from "./helpersFullCalenderHooks/FCHooks";

import useReducerFCHooks from "../FullCalenderReducer/RedcuerFCHooks";
import ST from "./FullCalender.module.scss";
import DialogsFormsFC from "../DialogsFormsFC/DialogsFormsFC";
const { FullCalendar, dayGridPlugin, interactionPlugin, timeGridPlugin } =
  FullCalenderComponentsUtilites;

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
  useFollowState({ curEventClick: curEventClick });

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        eventClick={(event) => {
          console.log(event);
          setCurEventClick(event);
        }}
        eventDidMount={(info) => {
          // console.log(info.event._def.publicId);
          const [type, id] = info.event._def.publicId.split("/");
          info.el.style.backgroundColor =
            type === "event" ? "#8f8fff" : "#ff2929";
        }}
        eventChange={(info) => {
          console.log(info);
          // console.log(info.event._def.publicId);
          // const [type, id] = info.event._def.publicId.split("/");
          // info.el.style.backgroundColor =
          //   type === "event" ? "#8f8fff" : "#ff2929";
        }}
        eventContent={useRenderEventContent(
          eventsManual,
          tasksManual,
          removeEvent,
          removeTask
        )}
        initialView="dayGridMonth"
        editable
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
