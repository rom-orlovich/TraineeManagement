import { DateClickArg } from "@fullcalendar/interaction";
import {
  CalendarOptions,
  DayCellContentArg,
  EventContentArg,
} from "@fullcalendar/react";
import { useCallback, useMemo } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { ReactDispatch } from "../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../helpers/helperFunction";

import { AddEventFormInterface } from "../../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import useReducerFCHooks from "../../ReducerFC/RedcuerFCHooks";
import EventFC from "../ComponentsFC/EventFC/EventFC";
import TaskFC from "../ComponentsFC/TaskFC/TaskFC";
import { ExportComponentsFC } from "./ExportComponentsFC";
import { getTypeAndIdFromEvent } from "./HelperFunFC";
export type dataType = "task" | "event";
const { Button } = FormComponetsExportMui;
//inject the day number element

//when set the info of date that click
export const useDateCellClick = (
  setOpenDialog: ReactDispatch<boolean>,
  setInfo: (info: DateClickArg) => void
) => {
  return useCallback((info: DateClickArg) => {
    setInfo(info);
    setOpenDialog(true);
  }, []);
};

//render fit task or event content
export const useRenderEventContent = (
  eventManual: AddEventFormInterface[],
  tasksManual: AddTaskFormInterface[],
  removeEvent: (id: string) => void,
  removeTask: (id: string) => void
) => {
  return (eventContent: EventContentArg) => {
    console.log(eventContent.view.type);
    const { Type, id } = getTypeAndIdFromEvent(eventContent.event);
    const eventConPublicId = eventContent.event._def.publicId;
    const eventContentStart = eventContent.event.start;

    const objData = {
      event: eventManual.find((el) => el.id === eventConPublicId),
      task: tasksManual.find((el) => el.id === eventConPublicId),
    };

    const resData = objData[Type];

    const idToRemove = resData?.id ? resData.id : "";

    const participantsEvent = objData["event"]?.participants;
    const descriptionEvent = objData["event"]?.description;
    const statusTask = objData["task"]?.status;
    const descriptionTask = objData["task"]?.description;

    const sameProps = {
      // displayType: eventContent.view.type,
      title: eventContent.event.title,
      id: idToRemove,
      type: Type,
    };

    const objEventFCProps = {
      removeEvent,
      start: eventContentStart,
      end: eventContent.event.end,
      participants: participantsEvent ? participantsEvent : "",
      description: descriptionEvent ? descriptionEvent : "",
      ...sameProps,
    };
    const objTaskFCProps = {
      removeEvent: removeTask,
      time: eventContentStart,
      status: statusTask ? statusTask : false,
      description: descriptionTask ? descriptionTask : "",
      ...sameProps,
    };
    // pass to the props also the view of the event in order to fit it to the space of the event in the calender
    const ResRturn = {
      event: <EventFC {...objEventFCProps} />,
      task: <TaskFC {...objTaskFCProps} />,
    };

    return ResRturn[Type];
  };
};

export const useInjectCellContent = (setState: ReactDispatch<boolean>) => {
  return (args: DayCellContentArg) => (
    <div>
      {/* <Button
        variant="contained"
        size="small"
        style={{
          minWidth: "20px",
          padding: "0.2rem 0.3rem",
          fontSize: "0.65rem",
        }}
        onClick={() => {
          setState(true);
        }}
      > */}
      {args.dayNumberText}
      {/* </Button> */}
    </div>
  );
};
const { dayGridPlugin, interactionPlugin, timeGridPlugin } = ExportComponentsFC;
//hook that create the props of full calender component
export function useFullCalenderProps(
  className: { [key: string]: string },
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  //reducer state of the full calander component
  const useReducerFC = useReducerFCHooks();

  const {
    stateFullCalender,
    setCurEventClick,
    setInfo,
    removeEvent,
    removeTask,
  } = useReducerFC;
  const dateClick = useDateCellClick(setDialogOpen, setInfo);
  const { eventsFC, eventsManual, tasksManual } = stateFullCalender;

  const contentUserRenderEvent = useRenderEventContent(
    eventsManual,
    tasksManual,
    removeEvent,
    removeTask
  );

  //the props of the calenderfc
  const propsFC: CalendarOptions = useMemo(() => {
    return {
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
      eventClick: (event) => {
        const arrComposedPathLength = event.jsEvent.composedPath().length;
        if (
          arrComposedPathLength === 32 ||
          arrComposedPathLength == 33 ||
          arrComposedPathLength == 34
        )
          return;
        console.log(event.jsEvent.composedPath());
        setCurEventClick(event);
        setDialogOpen(true);
      },
      eventDidMount: (info) => {
        const { Type } = getTypeAndIdFromEvent(info.event);

        console.log(info.event);
      },
      eventContent: contentUserRenderEvent,

      initialView: "dayGridMonth",

      height: "100%",
      dateClick: dateClick,
      events: eventsFC,
      viewClassNames: classNameMaker(className),
      headerToolbar: {
        left: "prev today next",
        center: "title",
        right: "timeGridDay timeGridWeek dayGridMonth",
      },
    };
  }, [
    eventsManual,
    tasksManual,
    eventsFC,
    className,
    dayGridPlugin,
    interactionPlugin,
    timeGridPlugin,
  ]);
  return { propsFC, useReducerFC };
}
