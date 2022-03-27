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
  const { addEvent, infoDateFC, id } = payload;
  const AddEvent = addEvent || {
    eventManual: state.eventsManual[0],
    eventFC: state.eventsFC[0],
  };
  const ReturnState: ReturnState = {
    setCurInfo: {
      eventsFC: [...state.eventsFC],
      eventsManual: [...state.eventsManual],
      curClickFC: infoDateFC,
    },
    addEvent: {
      eventsFC: [...state.eventsFC, AddEvent.eventFC],
      eventsManual: [...state.eventsManual, AddEvent.eventManual],
      curClickFC: infoDateFC,
    },
    removeEvent: {
      eventsFC: [...state.eventsFC.filter((el) => el.id !== id)],
      eventsManual: [...state.eventsManual.filter((el) => el.id !== id)],
      curClickFC: infoDateFC,
    },
  };
  return ReturnState[type];
};
