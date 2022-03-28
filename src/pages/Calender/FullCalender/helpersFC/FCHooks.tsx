import { DateClickArg } from "@fullcalendar/interaction";
import { DayCellContentArg, EventContentArg } from "@fullcalendar/react";
import { useCallback } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { ReactDispatch } from "../../../../helpers/GlobalType";
import { AddEventFormInterface } from "../../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import EventFC from "../ComponentsFC/EventFC/EventFC";
import TaskFC from "../ComponentsFC/TaskFC/TaskFC";
import { getTypeAndIdFromEvent } from "./HelperFunFC";
export type dataType = "task" | "event";
const { Button } = FormComponetsExportMui;

export const useInjectCellContent = (setState: ReactDispatch<boolean>) => {
  return (args: DayCellContentArg) => (
    <div>
      <Button
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
      >
        {args.dayNumberText}
      </Button>
    </div>
  );
};

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

    const ResRturn = {
      event: <EventFC {...objEventFCProps} />,
      task: <TaskFC {...objTaskFCProps} />,
    };

    return ResRturn[Type];
  };
};

// ? objData[Type]
//       // : { ...objData["event" || "Task"] };
