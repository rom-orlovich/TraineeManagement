import React, { useCallback, useEffect, useState } from "react";
import { SelectOptions } from "../DummyData/DummyDataType";
import SelectInput from "../components/Form/SelectInput/SelectInput";
import { propsType } from "./GlobalType";
import { classNameMaker, mapEl, printVariable } from "./helperFunction";
import { SelectOption } from "@mui/material/node_modules/@mui/base";
import { FormComponetsExportMui } from "../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { TextFieldProps } from "@mui/material";

//print state

export const useFollowState = (...args: Record<string, any>[]) => {
  useEffect(() => {
    args.forEach((el, i) => {
      const key = printVariable(el);
      console.log(key, el[key]);
    });
  }, [...args]);
};

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
  const [state, setState] = useState(false);
  const onMouseEnter = useCallback(() => {
    setState(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setState(false);
  }, []);

  return { stateNav: state, onMouseEnter, onMouseLeave };
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
const { TextField, MenuItem } = FormComponetsExportMui;
export function useGetSelectInputMui<T extends string>(
  options: SelectOption<T>[]
) {
  const [state, setState] = useState(options[0].value);
  const el = useCallback(
    ({ ...rest }: TextFieldProps) => {
      return (
        <TextField
          value={state}
          select
          onChange={({ target }) => {
            setState(target.value as T);
          }}
          {...rest}
        >
          {mapEl(options, (el) => {
            return (
              <MenuItem key={el.value} value={el.value}>
                {el.label}
              </MenuItem>
            );
          })}
        </TextField>
      );
    },
    [state]
  );

  return { stateSelect: state, setStateSelect: setState, SelectElement: el };
}
