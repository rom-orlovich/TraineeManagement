import { GridRowParams } from "@mui/x-data-grid";
import { JSXcomponentType, ReactDispatch } from "../../helpers/GlobalType";

export type ReactStateType = readonly {
  [key: string]: any;
}[];
export type ReactDispatchType = ReactDispatch<ReactStateType>;
export type actionTypeFun = (
  parma: GridRowParams<{
    [key: string]: any;
  }>,
  fun?: ReactDispatchType,
  curState?: ReactStateType
) => void;

// export type arrayActionsType = typeof arrayActions[number];
export interface ActionsKindsColumns {
  action: "confirm" | "delete";
}
export type ActionsDataGridType<T extends ActionsKindsColumns> = {
  [P in T as P["action"]]: {
    label: P["action"];
    icon: {
      iconElement: JSXcomponentType;
      iconDetails?: { color?: string; size?: number };
    };
    action: actionTypeFun;
  };
};

// type try = ActionsDataGridType<{ action: "confirm" | "delete" }>;
