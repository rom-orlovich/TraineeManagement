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
}: {
  type: string;
  title: string;
  id: string;
  removeEvent: (id: string) => void;
  time: Date | null;
  status: boolean;
  description: string;
}) {
  const TimeLocal = time ? getLocalTime(time) : "";
  return (
    <div>
      <HeaderCellTitle
        removeEvent={removeEvent}
        id={id}
        title={title}
        type={captialFirstLetter(type)}
      />
      <b>Time: </b>
      {TimeLocal}
      <div>
        <b>Status:</b> {status ? "Finish" : "In Process"}
      </div>
      {description ? (
        <div>
          <b>Description:</b> {description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskFC;
