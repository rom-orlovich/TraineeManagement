import { Routes } from "react-router-dom";
import { Route } from "react-router";
import App from "../App";

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
import AddTraineePage from "../pages/AddFormPages/AddTraineePage/AddTraineePage";
import AddLeadPage from "../pages/AddFormPages/AddLeadPage/AddLeadPage";
import AddActivityPage from "../pages/AddFormPages/AddActivityPage/AddActivityPage";

import AddProductPage from "../pages/AddFormPages/AddProductPage/AddProductPage";
import SitePreferences from "../pages/Settings/SitePreferences/SitePreferences";
import UserSettings from "../pages/Settings/UserSettings/UserSettings";
import AdvanceOptions from "../pages/Settings/AdvanceOptions/AdvanceOptions";

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

        <Route path="settings" element={<Settings />}>
          <Route path="sitePreferences" element={<SitePreferences />}></Route>
          <Route path="userSettings" element={<UserSettings />}></Route>
          <Route path="advanceOptions" element={<AdvanceOptions />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
