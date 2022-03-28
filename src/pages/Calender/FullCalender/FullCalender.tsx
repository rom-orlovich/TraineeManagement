import { useGetDialogWithOpenState } from "../../../helpers/HelperHooks";

import { ExportComponentsFC } from "./helpersFC/ExportComponentsFC";

import { useFullCalenderProps } from "./helpersFC/FCHooks";

import ST from "./FullCalender.module.scss";
import DialogsFormsFC from "../DialogsFormsFC/DialogsFormsFC";

const { FullCalendar } = ExportComponentsFC;

function FullCalender() {
  const { setStateIsOpen, DialogMui } = useGetDialogWithOpenState();
  const { propsFC, useReducerFC } = useFullCalenderProps(ST, setStateIsOpen);
  const {
    stateFullCalender,

    setNewEvent,
    setNewTask,
  } = useReducerFC;

  const { curClickFC } = stateFullCalender;

  return (
    <>
      <FullCalendar {...propsFC} />
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
