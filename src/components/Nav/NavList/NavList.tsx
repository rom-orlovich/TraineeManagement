import React, { Dispatch, useState } from "react";
import {
  arrIsEmpty,
  classNameMaker,
  mapEl,
} from "../../../helpers/helperFunction";

import {
  MouseEventHook,
  propsType,
  ReactDispatch,
} from "../../../helpers/GlobalType";

import { LinksListType } from "../../../helpers/LinksTypes";
import NavLinkUI from "../NavLinkUI/NavLinkUI";

import { objActions } from "../../../layout/NavBar/NavBarRedcuer";
import {
  ActionTypeReducer,
  NavBarLinksIds,
} from "../../../layout/NavBar/NavBarType";

import Alerts from "../../../layout/NavBar/AlertBar/Alerts/Alerts";

import NavLinksUI from "../../../layout/NavBar/NavLinksUi/NavLinksUI";
import ST from "./NavList.module.scss";
import { AlertsListType } from "../../../layout/NavBar/AlertBar/AlertBarTypes";
import NoAlertsFound from "../../../layout/NavBar/AlertBar/NoAlertFound/NoAlertsFound";
function NavList({
  className,
  el,
  id,
  listLinks,
  state,
  dispatch,
  alertsList,
  setStateList,
}: propsType &
  MouseEventHook & {
    id: NavBarLinksIds;
    listLinks?: LinksListType;
    el: JSX.Element;
    state: boolean;
    dispatch: Dispatch<ActionTypeReducer>;
    alertsList?: AlertsListType;
    setStateList?: ReactDispatch<AlertsListType>;
  }) {
  let arrAction = objActions[id];
  // const [alertsListState, setAlertListState] = useState(alertsList);
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
          onMouseLeave={(e) => {
            dispatch({ type: arrAction[1] });

            if (e.currentTarget.className.match(/Alert/i))
              setStateList &&
                setStateList((pre) =>
                  pre?.map((el) => {
                    return { ...el, active: false };
                  })
                );
          }}
        >
          {listLinks ? (
            <NavLinksUI
              listLinks={listLinks}
              isActiveClass={classNameMaker(ST.isActive)}
              navLinkUiStyle={classNameMaker(ST.NavLinkUi)}
            />
          ) : alertsList && !arrIsEmpty(alertsList) ? (
            <Alerts alertsList={alertsList} setStateList={setStateList} />
          ) : (
            <NoAlertsFound />
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
