import { Reducer } from "react";
import { setSomeKeyStateTrue } from "../../helpers/helperFunction";
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

export const navBarRedcuer: Reducer<
  typeof initialStateNavBar,
  ActionTypeReducer
> = (state, action) => {
  const actionsRes = {
    displayAddButtonLinks: setSomeKeyStateTrue(state, "addButton"),
    noDisplayAddButtonLinks: { ...initialStateNavBar },
    displayAlertsList: {
      ...setSomeKeyStateTrue(state, "alerts"),
    },
    noDisplayAlertList: {
      ...initialStateNavBar,
    },
    displayProfileMenuLinks: setSomeKeyStateTrue(state, "profileMenu"),
    noDisplayProfileMenuLinks: { ...initialStateNavBar },
  };
  return actionsRes[action.type];
};

// setSomeKeyStateTrue(state, "alerts")
