import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import App from "../App";
import Layout from "../layout/Layout";
import Overview from "../pages/Overview/Overview";
import Financial from "../pages/Financial/Financial";
import Trainees from "../pages/Trainees/Trainees";
import Calender from "../pages/Calender/Calender";
import Settings from "../pages/Settings/Settings";
import Leads from "../pages/Leads/Leads";
import Analytics from "../pages/Analytics/Analytics.";
import Activities from "../pages/Activities/Activities";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import AddTraineePage from "../pages/AddTraineePage/AddTraineePage";
import AddLeadPage from "../pages/AddLeadPage/AddLeadPage";
import AddActivityPage from "../pages/AddActivityPage/AddActivityPage";
import AddTaskPage from "../pages/AddTaskPage/AddTaskPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Overview />} />
        <Route path="calender" element={<Calender />} />

        <Route path="trainees" element={<Trainees />} />
        <Route path="trainees/userProfile/:id" element={<UserProfilePage />} />

        <Route path="trainees/addTrainee" element={<AddTraineePage />} />
        <Route path="userProfile/Admin" element={<UserProfilePage />} />
        <Route path="leads" element={<Leads />} />
        <Route path="leads/addLeads" element={<AddLeadPage />} />
        <Route path="financial" element={<Financial />} />
        <Route path="financial/activities" element={<Activities />} />
        <Route path="activities/addActivity" element={<AddActivityPage />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="addTask" element={<AddTaskPage />} />
        <Route path="addProduct" element={<AddProductPage />} />
        {/* <Route path="setting" element={<Settings />}></Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
