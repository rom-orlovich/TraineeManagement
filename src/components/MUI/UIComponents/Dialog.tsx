import React from "react";
import { propsType } from "../../../helpers/GlobalType";
import { UIComponentsExportMui } from "../UIComponentsExport/UIComponentsExportMui";
import { DialogsMuiTypeProps } from "./DialogTypes";
const { Dialog, DialogTitle } = UIComponentsExportMui;
function DialogMui({ isOpen, children, title, onClose }: DialogsMuiTypeProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      {title ? <DialogTitle>{title} </DialogTitle> : ""}

      {children}
    </Dialog>
  );
}

export default DialogMui;
