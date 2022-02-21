import React, { useState } from "react";

/**
 *
 * @param bool default is false
 *
 */
export const useChangeBool = (bool = false) => {
  const [stateBool, setStateBool] = useState(bool);
  const changeStateBool = () => {
    setStateBool((preState) => !preState);
  };
  return { stateBool, changeStateBool };
};

export const useManageMouseFun = () => {
  const { stateBool, changeStateBool } = useChangeBool(false);
  const onMouseEnter = () => {
    changeStateBool();
  };
  const onMouseLeave = () => {
    changeStateBool();
  };
  return { stateBool, onMouseEnter, onMouseLeave };
};
