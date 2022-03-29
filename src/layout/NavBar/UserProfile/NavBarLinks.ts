import { LinksListType } from "../../../helpers/LinksTypes";

export const addButtonlinks: LinksListType = [
  { to: "/trainees/addTrainee", name: "Add Trainee", subLinks: [] },
  { to: "/leads/addLeads", name: "Add Leads", subLinks: [] },
  { to: "/activities/addActivity", name: "Add Activity", subLinks: [] },
  { to: "/calender", name: "Add Event", subLinks: [] },
  { to: "/addProduct", name: "Add Product", subLinks: [] },
];

export const profileLinks: LinksListType = [
  { to: "/userProfile/Admin", name: "UserProfile", subLinks: [] },
  { to: "/setting", name: "Setting", subLinks: [] },
  { to: "", name: "Log Out", subLinks: [] },
];
