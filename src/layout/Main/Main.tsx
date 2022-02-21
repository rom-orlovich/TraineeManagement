import React, { ReactElement } from "react";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";
import ST from "./Main.module.scss";
function Main({ children, className }: propsType) {
  return <main className={classNameMaker(ST.main, className)}>{children}</main>;
}

export default Main;
