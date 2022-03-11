import React, { useCallback, useState } from "react";
import { SelectOptions } from "../DummyData/DummyDataType";
import SelectInput from "../components/Form/SelectInput/SelectInput";
import { propsType } from "./GlobalType";
import { classNameMaker } from "./helperFunction";
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

export function useGetManageSelectInputState<T extends string>(
  options: SelectOptions
) {
  const [selectState, setSelectState] = useState(options.options[0].value);

  const el = useCallback(
    ({ className }: propsType) => (
      <SelectInput
        className={classNameMaker(className)}
        data={options}
        SetValueOnChange={setSelectState}
      />
    ),
    []
  );
  return { state: selectState as T, setState: setSelectState, el };
}
