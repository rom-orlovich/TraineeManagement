import React from "react";
import NavLinkUI from "../../../components/Nav/NavLinkUI/NavLinkUI";
import { propsType } from "../../../helpers/GlobalType";
import { mapEl } from "../../../helpers/helperFunction";
import { LinksListType } from "../../../helpers/LinksTypes";

function NavLinksUI({
  navLinkUiStyle,
  isActiveClass,
  listLinks,
}: {
  isActiveClass?: string | undefined;
  navLinkUiStyle?: string;
  listLinks: LinksListType;
}) {
  return (
    <>
      {mapEl(listLinks, (el) => {
        return (
          <NavLinkUI
            isActiveClass={isActiveClass}
            className={navLinkUiStyle}
            key={el.name}
            to={el.to}
          >
            {el.name}
          </NavLinkUI>
        );
      })}
    </>
  );
}

export default NavLinksUI;
