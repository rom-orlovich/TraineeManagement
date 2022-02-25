import React from "react";

import SubLinks from "../../components/Nav/SubLinks/SubLinks";

import { classNameMaker, mapEl } from "../../helpers/helperFunction";
import ST from "./SideNavBar.module.scss";
import { propsType } from "../../helpers/GlobalType";

import { Links } from "./Links";

function SideNavBar({ className }: propsType) {
  return (
    <nav className={classNameMaker(ST.SideNavBar, className)}>
      <div className={classNameMaker(ST.SideNavBar_logo)}> </div>
      <ul className={classNameMaker()}>
        {mapEl(Links, (el) => (
          <SubLinks key={el.name} {...el}></SubLinks>
        ))}
      </ul>
    </nav>
  );
}

export default SideNavBar;
