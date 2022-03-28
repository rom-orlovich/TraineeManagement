import { EventApi } from "@fullcalendar/react";
import { EventType } from "../TypesFC";

export const getTypeAndIdFromEvent = (event: EventApi | undefined) => {
  const EventPublicID = event?._def.publicId ? event._def.publicId : "";
  const [type, id] = EventPublicID.split("/");
  const Type = (type ? type : "event") as EventType;
  return { Type, id };
};
