export type NavBarLinksIds = "addButton" | "alerts" | "profileMenu";

export type ActionOptionsType =
  | "displayAddButtonLinks"
  | "noDisplayAddButtonLinks"
  | "displayAlertsList"
  | "noDisplayAlertList"
  | "displayProfileMenuLinks"
  | "noDisplayProfileMenuLinks";
export interface ActionTypeReducer {
  type: ActionOptionsType;
  payload?: any;
}
