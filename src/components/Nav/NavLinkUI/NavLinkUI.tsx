import { MouseEventHandler, useEffect, useState } from "react";

import { NavLink, NavLinkProps } from "react-router-dom";
import { classNameMaker } from "../../../helpers/helperFunction";
import { useChangeBool } from "../../../helpers/HelperHooks";

import { IconsSideNavBarType } from "../../../style/icons/iconType";

import ST from "./NavLinkUi.module.scss";
function NavLinkUI({
  icons,
  className,
  to,
  children,
  isOpen,
  onClick,
}: NavLinkProps & {
  onClick?: MouseEventHandler<HTMLElement>;
  icons?: IconsSideNavBarType;
  isOpen?: boolean;
}) {
  const iconsArray = icons || [];
  let IconUp, IconDown, IconLink;
  if (iconsArray.length !== 0)
    if (iconsArray.length === 3) [IconUp, IconDown, IconLink] = iconsArray;
    else [IconLink] = iconsArray;

  return (
    <li className={classNameMaker()} onClick={onClick}>
      <NavLink
        className={({ isActive }) =>
          classNameMaker(ST.nav_link, isActive ? ST.isActive : "", className)
        }
        to={to}
      >
        {
          <>
            <span className={classNameMaker()}>
              {IconLink && <IconLink size={20} />}
            </span>
            {children}
          </>
        }
      </NavLink>
    </li>
  );
}

export default NavLinkUI;

{
  /* <span className={classNameMaker()}>
        {isOpen ? IconUp && <IconUp /> : IconDown && <IconDown />}
      </span> */
}
