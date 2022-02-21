import React from "react";
import { Outlet } from "react-router";
import { propsType } from "../helpers/GlobalType";

import Header from "./Header/Header";
import Main from "./Main/Main";
import SideNavBar from "./SideNavBar/SideNavBar";
import ST from "./Layout.module.scss";
import { classNameMaker } from "../helpers/helperFunction";
function Layout({ children }: propsType) {
  return (
    <div className={classNameMaker(ST.layout_grid)}>
      <Header className={classNameMaker(ST.header_area)}></Header>
      <SideNavBar className={classNameMaker(ST.sideBar_area)}></SideNavBar>
      <Main className={classNameMaker(ST.main_area)}>{<Outlet />}</Main>
    </div>
  );
}

export default Layout;
