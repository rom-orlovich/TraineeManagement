import { EventClickArg } from "@fullcalendar/react";
import {
  filterById,
  findByID,
  getInitObj,
} from "../../../helpers/helperFunction";
import { AddEventFormInterface } from "../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import {
  addEventPayload,
  addTaskPayload,
  FullCalenderInitalState,
} from "./TypesReducerFC";

export const getEventData = (
  curClickEventInfo: EventClickArg | undefined,
  stateFC: FullCalenderInitalState
) => {
  const { tasksManual, eventsManual } = stateFC;
  const publicId = curClickEventInfo?.event?._def.publicId
    ? curClickEventInfo?.event?._def.publicId
    : "";

  const eventFindId = eventsManual.find((el) => {
    return el.id === publicId;
  });
  const taskFindId = findByID(publicId, tasksManual);

  const objData = {
    event: eventFindId ? eventFindId : { ...getInitObj(eventsManual[0]) },
    task: taskFindId ? taskFindId : { ...getInitObj(tasksManual[0]) },
  };

  const eventProps: AddEventFormInterface = {
    ...objData["event"],
  };
  const taskProps: AddTaskFormInterface = {
    ...objData["task"],
  };
  return { eventDataProps: eventProps, taskDataProps: taskProps };
};

export const checkIfEventExist = (
  payload: addEventPayload,
  state: FullCalenderInitalState
) => {
  const { eventsFC, eventsManual } = state;
  const { eventManual, eventFC } = payload;

  const check = findByID(eventFC.id, eventsFC);
  const resReturn = check
    ? {
        eventsFC: [...filterById(eventFC.id, eventsFC), eventFC],
        eventsManual: [
          ...filterById(eventManual.id, eventsManual),
          eventManual,
        ],
      }
    : {
        eventsFC: [...eventsFC, eventFC],
        eventsManual: [...eventsManual, eventManual],
      };
  return resReturn;
};

export const checkIfTaskExist = (
  payload: addTaskPayload,
  state: FullCalenderInitalState
) => {
  const { eventsFC, tasksManual } = state;
  const { taskManual, eventFC } = payload;

  const check = findByID(eventFC.id, eventsFC);
  const resReturn = check
    ? {
        eventsFC: [...filterById(eventFC.id, eventsFC), eventFC],
        tasksManual: [...filterById(taskManual.id, tasksManual), taskManual],
      }
    : {
        eventsFC: [...eventsFC, eventFC],
        tasksManual: [...tasksManual, taskManual],
      };
  return resReturn;
};
