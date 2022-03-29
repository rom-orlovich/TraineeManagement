import React from "react";
import { getLocalTime } from "../../../../../helpers/DatesHelpers";
import { captialFirstLetter } from "../../../../../helpers/helperFunction";
import HeaderCellTitle from "../HeaderCellTitle";

function TaskFC({
  type,
  title,
  id,
  removeEvent,
  time,
  status,
  description,
  displayType,
}: {
  displayType?: string;
  type: string;
  title: string;
  id: string;
  removeEvent: (id: string) => void;
  time: Date | null;
  status: boolean;
  description: string;
}) {
  const keyDisplayType = displayType as
    | "timeGridWeek"
    | "timeGridDay"
    | "dayGridMonth";
  const TimeLocal = time ? getLocalTime(time) : "";
  return (
    <div
      style={{
        backgroundColor: `${status ? "rgb(133 232 100)" : "rgb(245 56 56)"}`,
        height: "100%",
      }}
    >
      <HeaderCellTitle
        removeEvent={removeEvent}
        id={id}
        title={title}
        type={captialFirstLetter(type)}
      />
      <b>Time: </b>
      {TimeLocal}

      {description ? (
        <div>
          <b>Description:</b>
          <div> {description}</div>
        </div>
      ) : (
        ""
      )}
      <div>
        <b>Status:</b> {status ? "Finish" : "In Process"}
      </div>
    </div>
  );
}

export default TaskFC;
