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
function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Overview />}></Route>
        <Route path="calender" element={<Calender />}></Route>
        <Route path="trainees" element={<Trainees />}></Route>
        <Route path="leads" element={<Leads />}></Route>
        <Route path="financial" element={<Financial />}></Route>
        <Route path="setting" element={<Settings />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
