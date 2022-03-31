import { LinksListType } from "../../../helpers/LinksTypes";

export const addButtonlinks: LinksListType = [
  { to: "/trainees/addTrainee", name: "Add Trainee", subLinks: [] },
  { to: "/leads/addLeads", name: "Add Leads", subLinks: [] },
  { to: "/activities/addActivity", name: "Add Activity", subLinks: [] },
  { to: "/calender", name: "Add Event", subLinks: [] },
];

export const profileLinks: LinksListType = [
  { to: "/userProfile/Admin", name: "UserProfile", subLinks: [] },
  { to: "/settings", name: "Settings", subLinks: [] },
  { to: "", name: "Log Out", subLinks: [] },
];
