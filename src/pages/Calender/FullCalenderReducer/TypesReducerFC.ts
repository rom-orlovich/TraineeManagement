import { DateClickArg } from "@fullcalendar/interaction";
import { EventAddArg, EventClickArg, EventInput } from "@fullcalendar/react";
import { Reducer } from "react";
import { AddEventFormInterface } from "../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";

export interface FullCalenderInitalState {
  eventsFC: EventInput[];
  eventsManual: AddEventFormInterface[];
  tasksManual: AddTaskFormInterface[];
  curClickFC?: Partial<DateClickArg>;
  curEventClick?: Partial<EventClickArg>;
}
type strTypeFC =
  | "setCurEvent"
  | "setCurInfo"
  | "addEvent"
  | "addTask"
  | "removeEvent"
  | "removeTask";

export interface addEventPayload {
  eventManual: AddEventFormInterface;
  eventFC: EventInput;
}
export interface addTaskPayload {
  taskManual: AddTaskFormInterface;
  eventFC: EventInput;
}
export interface typeActionFC {
  type: strTypeFC;
  payload: {
    infoDateFC?: Partial<DateClickArg>;
    addEvent?: addEventPayload;
    addTask?: addTaskPayload;
    id?: string;
    curEventClick?: Partial<EventClickArg>;
  };
}
export type DispatchTypeReducerFC = React.Dispatch<typeActionFC>;
export const FCInitalState: FullCalenderInitalState = {
  eventsFC: [],
  eventsManual: [],
  tasksManual: [],
  curClickFC: {},
  curEventClick: {},
};
export type ReturnState = {
  [p in typeActionFC["type"]]: FullCalenderInitalState;
};
