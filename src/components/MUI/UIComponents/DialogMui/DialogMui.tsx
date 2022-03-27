import React from "react";
import { propsType } from "../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../helpers/helperFunction";
import { UIComponentsExportMui } from "../../UIComponentsExport/UIComponentsExportMui";
import { DialogsMuiTypeProps } from "./DialogMuiTypes";
import ST from "./DialogMui.module.scss";

const { Dialog, DialogTitle, DialogContent, DialogContentText } =
  UIComponentsExportMui;
function DialogMui({
  open,
  children,
  title,
  onClose,
  textContent,
  dialogTitleProps,
  dialogContentProps,

  dialogContentTextProps,

  ...rest
}: DialogsMuiTypeProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...rest}
      className={classNameMaker(ST)}
    >
      {title ? <DialogTitle {...dialogTitleProps}>{title} </DialogTitle> : ""}
      <DialogContent {...dialogContentProps}>
        {textContent ? (
          <DialogContentText {...dialogContentTextProps}>
            {textContent}
          </DialogContentText>
        ) : (
          ""
        )}
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DialogMui;
