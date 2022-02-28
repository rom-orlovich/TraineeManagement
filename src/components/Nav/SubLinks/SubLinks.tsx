import { useState } from "react";
import { classNameMaker, mapEl } from "../../../helpers/helperFunction";
import { SideNavLinkType } from "../../../layout/SideNavBar/SideNavBarTypes";
import NavLinkUI from "../NavLinkUI/NavLinkUI";

import { useChangeBool } from "../../../helpers/HelperHooks";
import ST from "./SubLinks.module.scss";
function SubNavBar({ name, to, subLinks, icons }: SideNavLinkType) {
  const { stateBool: isOpen, changeStateBool: openSubNav } = useChangeBool();

  const links = subLinks || [];
  let iconsLink = icons || [];

  return (
    <ul className={classNameMaker(ST.MainLink)}>
      <NavLinkUI icons={iconsLink} isOpen={isOpen} to={to} onClick={openSubNav}>
        {name}
      </NavLinkUI>

      <ul className={classNameMaker(ST.SubLinks)}>
        {isOpen &&
          links?.length !== 0 &&
          mapEl(links, ({ name, ...rest }) => (
            <NavLinkUI key={name} {...rest}>
              {name}
            </NavLinkUI>
          ))}
      </ul>
    </ul>
  );
}

export default SubNavBar;
