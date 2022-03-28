import { DateClickArg } from "@fullcalendar/interaction";
import { EventChangeArg, EventClickArg } from "@fullcalendar/react";
import React, { useCallback, useReducer } from "react";
import {
  getDateDetails,
  getTimeDateDetails,
} from "../../../helpers/DatesHelpers";
import {
  filterById,
  findByID,
  getInitObj,
} from "../../../helpers/helperFunction";
import { AddEventFormInterface } from "../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import { reducerFC } from "./ReducerFC";
import {
  addEventPayload,
  addTaskPayload,
  FCInitalState,
  FullCalenderInitalState,
} from "./TypesReducerFC";
let countEvent = 0;
let countTask = 0;
//build in functions to dispatch action
function useReducerFCHooks() {
  const [stateFullCalender, dispatchFC] = useReducer(reducerFC, FCInitalState);

  const setNewEvent = useCallback((data: AddEventFormInterface) => {
    const {
      nameEvent,
      date,
      timeStart,
      timeEnd,
      participants,
      type,
      description,
      id,
    } = data;
    countEvent++;
    const dateFormat = {
      id: id ? id : type + "/" + countEvent,
      date: date,
    };

    dispatchFC({
      type: "addEvent",
      payload: {
        addEvent: {
          eventFC: {
            ...dateFormat,
            title: nameEvent,
            start: new Date(
              ...getDateDetails(date),
              ...getTimeDateDetails(timeStart)
            ),
            end: new Date(
              ...getDateDetails(date),
              ...getTimeDateDetails(timeEnd)
            ),
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

  const setNewTask = useCallback((data: AddTaskFormInterface) => {
    const { nameTask, date, time, status, type, description, id } = data;
    countTask++;

    const dateFormat = {
      id: id ? id : type + "/" + countTask,
      date: date,
    };

    dispatchFC({
      type: "addTask",
      payload: {
        addTask: {
          eventFC: {
            ...dateFormat,
            title: nameTask,

            start: new Date(
              ...getDateDetails(date),
              ...getTimeDateDetails(time)
            ),
          },
          taskManual: {
            ...dateFormat,
            type,
            nameTask,
            date,
            time,
            status,
            description,
          },
        },
      },
    });
  }, []);
  const setInfo = useCallback((info: DateClickArg) => {
    dispatchFC({ type: "setCurInfo", payload: { infoDateFC: info } });
  }, []);

  const setCurEventClick = useCallback((info: EventClickArg) => {
    dispatchFC({
      type: "setCurEvent",
      payload: { curClickEventInfo: info },
    });
  }, []);

  const removeEvent = useCallback((id: string) => {
    dispatchFC({ type: "removeEvent", payload: { id } });
  }, []);
  const removeTask = useCallback((id: string) => {
    dispatchFC({ type: "removeTask", payload: { id } });
  }, []);

  return {
    stateFullCalender,

    setNewEvent,
    setNewTask,
    setCurEventClick,
    setInfo,
    removeEvent,
    removeTask,
  };
}

export default useReducerFCHooks;
