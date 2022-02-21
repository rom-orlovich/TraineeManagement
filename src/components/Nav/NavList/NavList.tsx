import React from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { useChangeBool, useManageMouseFun } from "../../../helpers/HelperHooks";
import { MouseEventHook, propsType } from "../../../helpers/GlobalType";
import ST from "./NavList.module.scss";

function NavList({
  className,
  children,
  el,

  list,
}: propsType & MouseEventHook & { list: any[]; el: JSX.Element }) {
  const { stateBool, onMouseEnter, onMouseLeave } = useManageMouseFun();
  return (
    <div
      className={classNameMaker(ST.NavListContainer)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {el}
      {stateBool && (
        <div className={classNameMaker(ST.NavList, className)}></div>
      )}
    </div>
  );
}

export default NavList;
