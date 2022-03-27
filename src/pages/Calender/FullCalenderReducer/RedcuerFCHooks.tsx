import { DateClickArg } from "@fullcalendar/interaction";
import React, { useCallback, useReducer } from "react";
import { AddEventFormInterface } from "../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import { EventsTypeValues } from "../DialogsFormsFC/DialogFormsTypes";
import { reducerFC } from "./FullCalenderReducer";
import { FCInitalState } from "./TypesReducerFC";

//build in functions to dispatch action
function useReducerFCHooks() {
  const [stateFullCalender, dispatchFC] = useReducer(reducerFC, FCInitalState);
  const setNewTask = useCallback((data: AddTaskFormInterface) => {}, []);
  const setNewEvent = useCallback((data: AddEventFormInterface) => {
    const {
      nameEvent,
      date,
      timeStart,
      timeEnd,
      participants,
      type,
      description,
    } = data;
    const dateFormat = {
      id: nameEvent + ":" + date,
      date: date,
    };

    dispatchFC({
      type: "addEvent",
      payload: {
        addEvent: {
          eventFC: {
            ...dateFormat,
            title: nameEvent,
            start: timeStart,
            end: timeEnd,
          },
          eventManual: {
            ...dateFormat,
            type,
            nameEvent,
            timeStart,
            timeEnd,
            participants,
            description,
          },
        },
      },
    });
  }, []);
  const setInfo = useCallback((info: DateClickArg) => {
    dispatchFC({ type: "setCurInfo", payload: { infoDateFC: info } });
  }, []);

  const removeEvent = useCallback((id: string) => {
    dispatchFC({ type: "removeEvent", payload: { id } });
  }, []);
  return { stateFullCalender, setNewEvent, setNewTask, setInfo, removeEvent };
}
export default useReducerFCHooks;
