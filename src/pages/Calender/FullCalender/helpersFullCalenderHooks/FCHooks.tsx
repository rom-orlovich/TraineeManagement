import { DateClickArg } from "@fullcalendar/interaction";
import { DayCellContentArg, EventContentArg } from "@fullcalendar/react";
import { useCallback } from "react";
import { FormComponetsExportMui } from "../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { ReactDispatch } from "../../../../helpers/GlobalType";
import { AddEventFormInterface } from "../../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import { AddTaskFormInterface } from "../../DialogsFormsFC/AddTaskForm/AddTaskFormTypes";
import EventFC from "../ComponentsFC/EventFC/EventFC";
import TaskFC from "../ComponentsFC/TaskFC/TaskFC";
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

export const useRenderEventContent = (
  eventManual: AddEventFormInterface[],
  tasksManual: AddTaskFormInterface[],
  removeEvent: (id: string) => void,
  removeTask: (id: string) => void
) => {
  return (eventContent: EventContentArg) => {
    const eventConPublicId = eventContent.event._def.publicId;
    const [type] = eventConPublicId.split("/");

    const Type = type as dataType;
    const objData = {
      event: eventManual.find((el) => el.id === eventConPublicId),
      task: tasksManual.find((el) => el.id === eventConPublicId),
    };

    const resData = objData[Type]
      ? objData[Type]
      : { ...objData["event" || "Task"] };
    const idToRemove = resData?.id ? resData.id : "";

    const sameProps = {
      title: eventContent.event.title,
      id: idToRemove,
      type,
    };

    const objEventFCProps = {
      removeEvent,
      start: eventContent.event.start,
      end: eventContent.event.end,

      participants: objData["event"]?.participants
        ? objData["event"]?.participants
        : "",
      description: objData["event"]?.description
        ? objData["event"]?.description
        : "",
      ...sameProps,
    };
    const objTaskFCProps = {
      removeEvent: removeTask,
      time: eventContent.event.start,
      status: objData["task"]?.status ? objData["task"]?.status : false,
      description: objData["task"]?.description
        ? objData["task"]?.description
        : "",
      ...sameProps,
    };

    const ResRturn = {
      event: <EventFC {...objEventFCProps} />,
      task: <TaskFC {...objTaskFCProps} />,
    };

    return ResRturn[Type];
  };
};
