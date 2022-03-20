import { Reducer } from "react";
import { setPropsToTrue } from "../../helpers/helperFunction";
import { ActionTypeReducer } from "./NavBarType";

export const objActions = {
  addButton: ["displayAddButtonLinks", "noDisplayAddButtonLinks"] as const,
  alerts: ["displayAlertsList", "noDisplayAlertList"] as const,
  profileMenu: [
    "displayProfileMenuLinks",
    "noDisplayProfileMenuLinks",
  ] as const,
};

export const initialStateNavBar = {
  addButton: false,
  alerts: false,
  profileMenu: false,
};
const setNewState = (
  state: typeof initialStateNavBar,
  ...keys: (keyof typeof initialStateNavBar)[]
) => {
  return {
    ...state,
    ...setPropsToTrue(state, ...keys),
  };
};

export const reducerNavBar: Reducer<
  typeof initialStateNavBar,
  ActionTypeReducer
> = (state, action) => {
  const actionsRes = {
    displayAddButtonLinks: setNewState(state, "addButton"),
    noDisplayAddButtonLinks: { ...initialStateNavBar },
    displayAlertsList: setNewState(state, "alerts"),
    noDisplayAlertList: { ...initialStateNavBar },
    displayProfileMenuLinks: setNewState(state, "profileMenu"),
    noDisplayProfileMenuLinks: { ...initialStateNavBar },
  };
  return actionsRes[action.type];
};
