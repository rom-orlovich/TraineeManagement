import React, { Dispatch } from "react";
import { classNameMaker, mapEl } from "../../../helpers/helperFunction";

import { MouseEventHook, propsType } from "../../../helpers/GlobalType";

import { LinksListType } from "../../../helpers/LinksTypes";
import NavLinkUI from "../NavLinkUI/NavLinkUI";

import { objActions } from "../../../layout/NavBar/useRedcuer";
import {
  ActionTypeReducer,
  NavBarLinksIds,
} from "../../../layout/NavBar/NavBarType";
import ST from "./NavList.module.scss";

function NavList({
  className,

  el,
  id,
  listLinks,

  state,
  dispatch,
}: propsType &
  MouseEventHook & {
    id: NavBarLinksIds;
    listLinks: LinksListType;
    el: JSX.Element;
    state: boolean;
    dispatch: Dispatch<ActionTypeReducer>;
  }) {
  let arrAction = objActions[id];

  return (
    <div
      id={id}
      className={classNameMaker(ST.NavListContainer)}
      onMouseEnter={() => {
        dispatch({ type: arrAction[0] });
      }}
    >
      {el}
      {state && (
        <div
          className={classNameMaker(ST.NavList, className)}
          onMouseLeave={() => {
            dispatch({ type: arrAction[1] });
          }}
        >
          {mapEl(listLinks, (el) => {
            return (
              <NavLinkUI
                isActiveClass={classNameMaker(ST.isActive)}
                className={classNameMaker(ST.NavLinkUi)}
                key={el.name}
                to={el.to}
              >
                {el.name}
              </NavLinkUI>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NavList;

// useFollowState(
//   { addButton: state.addButton },
//   { alerts: state.alerts },
//   { profile: state.profileMenu }
// );
