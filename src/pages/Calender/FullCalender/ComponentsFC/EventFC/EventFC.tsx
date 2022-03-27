import { EventApi } from "@fullcalendar/react";
import React from "react";
import { getLocalTime } from "../../../../../helpers/DatesHelpers";
import { captialFirstLetter } from "../../../../../helpers/helperFunction";
import { AddEventFormInterface } from "../../../DialogsFormsFC/AddEventForm/AddEventFormTypes";
import HeaderCellTitle from "../HeaderCellTitle";

function EventFC({
  type,
  start,
  end,
  title,
  participants,
  description,
  id,
  removeEvent,
}: {
  type: string;
  start: Date | null;
  end: Date | null;
  title: string;
  participants: string;
  description: string;
  id: string;
  removeEvent: (id: string) => void;
}) {
  const timeStartText = start ? getLocalTime(start) : "";
  const timeEndText = end ? getLocalTime(end) : "";
  return (
    <div>
      <HeaderCellTitle
        removeEvent={removeEvent}
        id={id}
        title={title}
        type={captialFirstLetter(type)}
      />
      <b>Time:</b>
      {timeStartText}-{timeEndText}
      <div>
        <b>Participent:</b> {participants ? participants : 0}
      </div>
      {description ? (
        <div>
          <b>Description:</b>
          <div> {description}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EventFC;
