import { DateClickArg } from "@fullcalendar/interaction";
import { EventAddArg, EventInput } from "@fullcalendar/react";
import { Reducer } from "react";
import { AddEventFormInterface } from "../DialogsFormsFC/AddEventForm/AddEventFormTypes";

export interface FullCalenderInitalState {
  eventsFC: EventInput[];
  eventsManual: AddEventFormInterface[];
  curClickFC?: Partial<DateClickArg>;
}
type strTypeFC = "setCurInfo" | "addEvent" | "removeEvent";
export interface addEventPayload {
  eventManual: AddEventFormInterface;
  eventFC: EventInput;
}
export interface typeActionFC {
  type: strTypeFC;
  payload: {
    infoDateFC?: Partial<DateClickArg>;
    addEvent?: addEventPayload;
    id?: string;
  };
}
export type DispatchTypeReducerFC = React.Dispatch<typeActionFC>;
export const FCInitalState: FullCalenderInitalState = {
  eventsFC: [],
  eventsManual: [],
  curClickFC: {},
};
export type ReturnState = {
  [p in typeActionFC["type"]]: FullCalenderInitalState;
};
