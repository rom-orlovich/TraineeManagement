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

import Alerts from "../../../layout/NavBar/AlertBar/Alerts/Alerts";

import NavLinksUI from "../../../layout/NavBar/NavLinksUi/NavLinksUI";
import ST from "./NavList.module.scss";
function NavList({
  className,

  el,
  id,
  listLinks,

  state,
  dispatch,
  AlertsList,
}: propsType &
  MouseEventHook & {
    id: NavBarLinksIds;
    listLinks?: LinksListType;
    el: JSX.Element;
    state: boolean;
    dispatch: Dispatch<ActionTypeReducer>;
    AlertsList?: any[];
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
        <ul
          className={classNameMaker(ST.NavList, className)}
          onMouseLeave={() => {
            dispatch({ type: arrAction[1] });
          }}
        >
          {listLinks ? (
            <NavLinksUI
              listLinks={listLinks}
              isActiveClass={classNameMaker(ST.isActive)}
              navLinkUiStyle={classNameMaker(ST.NavLinkUi)}
            />
          ) : (
            AlertsList && <Alerts AlertsList={AlertsList} />
          )}
        </ul>
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
