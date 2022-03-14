import React, { useCallback, useState } from "react";
import { SelectOptions } from "../DummyData/DummyDataType";
import SelectInput from "../components/Form/SelectInput/SelectInput";
import { propsType } from "./GlobalType";
import { classNameMaker, mapEl } from "./helperFunction";
import { SelectOption } from "@mui/material/node_modules/@mui/base";
import { FormComponents } from "../components/Form/SelectInput/MuiForm/MuiFormComponets";
import { TextFieldProps } from "@mui/material";
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
const { FormControl, TextField, FormGroup, MenuItem } = FormComponents;
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
