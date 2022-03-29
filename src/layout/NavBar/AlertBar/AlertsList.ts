import { getNewDate, getNewTime } from "../../../helpers/DatesHelpers";
import { AlertsListType } from "./AlertBarTypes";

export const alertsList: AlertsListType = [
  {
    id: "12345",
    date: getNewDate(),
    time: getNewTime(+5),
    name: "Bla bla about to start",
    description: "The event: bla bla about to start in 5 minutes",
    active: true,
  },

  {
    id: "123",
    date: getNewDate(),
    time: getNewTime(-3),
    name: "Trainee Added",
    description: "New trainee add",
    active: false,
  },
  {
    id: "1234",
    date: getNewDate(),
    time: getNewTime(-7),
    name: "Lead Added",
    description: "New lead add",
    active: false,
  },
].sort((a, b) => b.time.getTime() - a.time.getTime());
