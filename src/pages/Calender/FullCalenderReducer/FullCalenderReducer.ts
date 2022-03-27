import { Reducer } from "react";
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
  const { addEvent, infoDateFC, addTask, id, curEventClick } = payload;

  const AddEvent = addEvent || {
    eventManual: state.eventsManual[0],
    eventFC: state.eventsFC[0],
  };
  const AddTask = addTask || {
    taskManual: state.tasksManual[0],
    eventFC: state.eventsFC[0],
  };
  const ReturnState: ReturnState = {
    setCurEvent: {
      eventsFC: [...state.eventsFC],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curEventClick: curEventClick,
    },

    setCurInfo: {
      eventsFC: [...state.eventsFC],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual],
      curClickFC: infoDateFC,
      curEventClick: state.curEventClick,
    },
    addEvent: {
      eventsFC: [...state.eventsFC, AddEvent.eventFC],
      eventsManual: [...state.eventsManual, AddEvent.eventManual],
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curEventClick: state.curEventClick,
    },
    removeEvent: {
      eventsFC: [...state.eventsFC.filter((el) => el.id !== id)],
      eventsManual: [...state.eventsManual.filter((el) => el.id !== id)],
      tasksManual: [...state.tasksManual],
      curClickFC: state.curClickFC,
      curEventClick: state.curEventClick,
    },
    addTask: {
      eventsFC: [...state.eventsFC, AddTask.eventFC],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual, AddTask.taskManual],
      curClickFC: state.curClickFC,
      curEventClick: state.curEventClick,
    },

    removeTask: {
      eventsFC: [...state.eventsFC.filter((el) => el.id !== id)],
      eventsManual: [...state.eventsManual],
      tasksManual: [...state.tasksManual.filter((el) => el.id !== id)],
      curClickFC: state.curClickFC,
      curEventClick: state.curEventClick,
    },
  };
  return ReturnState[type];
};
