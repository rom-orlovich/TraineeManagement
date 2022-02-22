import { colors } from "@mui/material";
import {
  GridActionsCellItem,
  GridActionsColDef,
  GridRowParams,
} from "@mui/x-data-grid";
import { useCallback } from "react";
import { AnyFun, JSXcomponentType } from "../../helpers/GlobalType";
import { iconsLinks } from "../../style/icons/icons";
const { MdOutlineDownloadDone: Vicon, AiFillDelete } = iconsLinks;

export type ReactDispatchType = React.Dispatch<
  React.SetStateAction<ReactStateType>
>;
export type ReactStateType = readonly {
  [key: string]: any;
}[];

type actionTypeFun = (
  parma: GridRowParams<{
    [key: string]: any;
  }>,
  fun?: ReactDispatchType,
  curState?: ReactStateType
) => void;

type ActionsGridDataType<T> = {
  label: keyof T;
  icon: {
    iconElement: JSXcomponentType;
    iconDetails?: { color?: string; size?: number };
  };
  action: actionTypeFun;
}[];

const clickDone: actionTypeFun = (parma, fun?, curState?) => {
  let cur = curState?.find((el) => el.id === parma.id);
  if (!parma.row.status)
    fun &&
      fun((pre) => [
        ...pre.filter((el) => el.id !== parma.id),
        { ...cur!, status: true },
      ]);
};

const clickDelete: actionTypeFun = (parma, fun?) =>
  parma.row.status &&
  fun &&
  fun((pre) => [...pre.filter((el) => el.id !== parma.id)]);

const actionsFunsObj = {
  delete: clickDelete,
  confirm: clickDone,
};

export const actionsDataGrid: ActionsGridDataType<typeof actionsFunsObj> = [
  {
    label: "confirm",
    icon: {
      iconElement: Vicon,
      iconDetails: {
        size: 25,
        color: colors.green.A700,
      },
    },
    action: clickDone,
  },
  {
    label: "delete",
    icon: {
      iconElement: AiFillDelete,
    },
    action: clickDelete,
  },
];
export const getDataGridMakeActions = (
  arr: typeof actionsDataGrid,
  state: ReactStateType,
  fun: ReactDispatchType
): GridActionsColDef => {
  return {
    field: "actions",
    type: "actions",
    getActions: (parma) =>
      arr.map((el) => {
        return (
          <GridActionsCellItem
            key={el.label}
            label={el.label}
            icon={<el.icon.iconElement {...el.icon.iconDetails} />}
            onClick={() => {
              el.action(parma, fun, state);
            }}
          />
        );
      }),
  };
};

// export const actions: GridActionsColDef = {
//   field: "actions",
//   type: "actions",
//   getActions: (parma) => [
//     <GridActionsCellItem
//       label="confirm"
//       onClick={() => clickDone(parma)}
//       icon={<Vicon size={25} color={colors.green.A700}></Vicon>}
//     />,
//     <GridActionsCellItem
//       label="delete"
//       icon={<AiFillDelete></AiFillDelete>}
//       onClick={() => {
//         clickDelete(parma);
//       }}
//     ></GridActionsCellItem>,
//   ],
// };
