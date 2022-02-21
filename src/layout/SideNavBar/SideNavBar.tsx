import React from "react";

import SubLinks from "../../components/Nav/SubLinks/SubLinks";

import { classNameMaker, mapEl } from "../../helpers/helperFunction";
import ST from "./SideNavBar.module.scss";
import { propsType } from "../../helpers/GlobalType";

import { Links } from "./Links";

function NavBar({ className }: propsType) {
  return (
    <nav className={classNameMaker(ST.NavBar, className)}>
      <div className={ST.NavBar_logo}> </div>
      <ul>
        {mapEl(Links, (el) => (
          <SubLinks key={el.name} {...el}></SubLinks>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
