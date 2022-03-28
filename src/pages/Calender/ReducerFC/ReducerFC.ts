import { Reducer } from "react";
import {
  checkIfEventExist,
  checkIfTaskExist,
  getEventData,
} from "./HelperFunctionReducer";
import {
  FullCalenderInitalState,
  ReturnState,
  typeActionFC,
} from "./TypesReducerFC";

//find the actucal build functions in redcuerFCHooks
export const reducerFC: Reducer<FullCalenderInitalState, typeActionFC> = (
  state,
  { type, payload }
) => {
  const { addEvent, infoDateFC, addTask, id, curClickEventInfo } = payload;

  let eventTaskData = curClickEventInfo
    ? getEventData(curClickEventInfo, state)
    : { eventDataProps: undefined, taskDataProps: undefined };

  const { eventDataProps, taskDataProps } = eventTaskData;

  const AddEvent = addEvent || undefined;
  const AddTask = addTask || undefined;
  const newEvent = AddEvent
    ? checkIfEventExist(AddEvent, state)
    : { eventsFC: [], eventsManual: [] };

  const newTask = AddTask
    ? checkIfTaskExist(AddTask, state)
    : { eventsFC: [], tasksManual: [] };

  const { eventsFC, eventsManual } = newEvent;
  const { eventsFC: eventsFCTask, tasksManual } = newTask;
  const ReturnState: ReturnState = {
    setCurEvent: {
      eventsFC: [...state.eventsFC],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curClickEventInfo: curClickEventInfo,
      curEventClick: eventDataProps,
      curTaskClick: taskDataProps,
    },

    setCurInfo: {
      eventsFC: [...state.eventsFC],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual],
      curClickFC: infoDateFC,
      curClickEventInfo: undefined,
      curEventClick: undefined,
      curTaskClick: undefined,
    },
    addEvent: {
      eventsFC: eventsFC,
      eventsManual: eventsManual,
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curClickEventInfo: undefined,
      curEventClick: undefined,
      curTaskClick: undefined,
    },
    removeEvent: {
      eventsFC: [...state.eventsFC.filter((el) => el.id !== id)],
      eventsManual: [...state.eventsManual.filter((el) => el.id !== id)],
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curClickEventInfo: undefined,
      curEventClick: undefined,
      curTaskClick: undefined,
    },
    addTask: {
      eventsFC: eventsFCTask,
      eventsManual: [...state.eventsManual],
      tasksManual: tasksManual,
      curClickFC: state.curClickFC,
      curClickEventInfo: undefined,
      curEventClick: undefined,
      curTaskClick: undefined,
    },

    removeTask: {
      eventsFC: [...state.eventsFC.filter((el) => el.id !== id)],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual.filter((el) => el.id !== id)],
      curClickFC: state.curClickFC,
      curClickEventInfo: undefined,
      curEventClick: undefined,
      curTaskClick: undefined,
    },
  };
  return ReturnState[type];
};
