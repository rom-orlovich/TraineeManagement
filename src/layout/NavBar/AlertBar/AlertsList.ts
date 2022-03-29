import { getNewDate, getNewTime } from "../../../helpers/DatesHelpers";
import { AlertsListType } from "./AlertBarTypes";

export const AlertsList: AlertsListType = [
  {
    id: "123",
    date: getNewDate(),
    time: getNewTime(-1),
    name: "Trainee Added",
    description: "New trainee add",
  },
  {
    id: "1234",
    date: getNewDate(),
    time: getNewTime(-2),
    name: "Lead Added",
    description: "New lead add",
  },
  {
    id: "12345",
    date: getNewDate(),
    time: getNewTime(5),
    name: "Bla bla about to start",
    description: "The event: bla bla about to start in 5 minutes",
  },
].sort((a, b) => b.time.getTime() - a.time.getTime());
