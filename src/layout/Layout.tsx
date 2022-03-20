import React from "react";
import { Outlet } from "react-router";
import { propsType } from "../helpers/GlobalType";

import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import SideNavBar from "./SideNavBar/SideNavBar";
import ST from "./Layout.module.scss";
import { classNameMaker } from "../helpers/helperFunction";
function Layout({ children }: propsType) {
  return (
    <div className={classNameMaker(ST.layout_grid)}>
      <NavBar className={classNameMaker(ST.NavBar_area)}></NavBar>
      <SideNavBar className={classNameMaker(ST.sideBar_area)}></SideNavBar>
      <Main className={classNameMaker(ST.main_area)}>{<Outlet />}</Main>
    </div>
  );
}

export default Layout;
