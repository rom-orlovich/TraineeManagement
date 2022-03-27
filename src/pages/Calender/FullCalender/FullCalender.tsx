import { classNameMaker } from "../../../helpers/helperFunction";
import {
  useFollowState,
  useGetDialogWithOpenState,
} from "../../../helpers/HelperHooks";
import AddEventForm from "../DialogsFormsFC/AddEventForm/AddEventForm";
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

  const { stateFullCalender, setInfo, setNewEvent, setNewTask, removeEvent } =
    useReducerFCHooks();
  const dateClick = useDateCellClick(setStateIsOpen, setInfo);
  const { eventsFC, eventsManual, curClickFC } = stateFullCalender;
  // useFollowState(
  //   { eventsFC: eventsFC },
  //   { eventsManual: eventsManual },
  //   { curClickFC: curClickFC }
  // );

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        eventClick={(event) => {
          // console.log(event);
        }}
        eventContent={useRenderEventContent(eventsManual, removeEvent)}
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
        />
      </DialogMui>
    </>
  );
}

export default FullCalender;
