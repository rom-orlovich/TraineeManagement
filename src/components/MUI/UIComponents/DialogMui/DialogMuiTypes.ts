import {
  DialogContentProps,
  DialogContentTextTypeMap,
  DialogProps,
  DialogTitleProps,
} from "@mui/material";

import { propsType } from "../../../../helpers/GlobalType";

export type DialogsMuiTypeProps = {
  title?: string;
  textContent?: string;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogContentTextProps?: DialogContentTextTypeMap;
} & propsType &
  DialogProps;
