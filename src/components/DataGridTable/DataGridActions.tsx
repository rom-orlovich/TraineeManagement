import { colors } from "@mui/material";
import { GridActionsCellItem, GridActionsColDef } from "@mui/x-data-grid";

import { iconsLinks } from "../../style/icons/icons";
import {
  ActionsGridDataType,
  actionTypeFun,
  ReactDispatchType,
  ReactStateType,
} from "./DataGridTypes";
const { MdOutlineDownloadDone: Vicon, AiFillDelete } = iconsLinks;

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

export const arrayActions = ["confirm", "delete"];

export const actionsDataGrid: ActionsGridDataType<typeof arrayActions> = {
  confirm: {
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
  delete: {
    label: "delete",
    icon: {
      iconElement: AiFillDelete,
    },
    action: clickDelete,
  },
};
export const getDataGridMakeActions = (
  arr: Partial<typeof arrayActions>,
  state: ReactStateType,
  fun: ReactDispatchType
): GridActionsColDef => {
  return {
    field: "actions",
    type: "actions",
    getActions: (parma) =>
      arr.map((el) => {
        if (!el) el = "confirm";
        const elData = actionsDataGrid[el];
        return (
          <GridActionsCellItem
            key={elData.label}
            label={elData.label}
            icon={<elData.icon.iconElement {...elData.icon.iconDetails} />}
            onClick={() => {
              elData.action(parma, fun, state);
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
