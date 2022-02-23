import { GridRowParams } from "@mui/x-data-grid";
import { JSXcomponentType } from "../../helpers/GlobalType";

export type ReactDispatchType = React.Dispatch<
  React.SetStateAction<ReactStateType>
>;
export type ReactStateType = readonly {
  [key: string]: any;
}[];

export type actionTypeFun = (
  parma: GridRowParams<{
    [key: string]: any;
  }>,
  fun?: ReactDispatchType,
  curState?: ReactStateType
) => void;

// export type arrayActionsType = typeof arrayActions[number];

export type ActionsGridDataType<T extends readonly string[]> = {
  [p in T[number]]: {
    label: p;
    icon: {
      iconElement: JSXcomponentType;
      iconDetails?: { color?: string; size?: number };
    };
    action: actionTypeFun;
  };
};

type t = ActionsGridDataType<["s", "g"]>;
