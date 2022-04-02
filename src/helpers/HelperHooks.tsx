import React, { useCallback, useEffect, useState } from "react";
import { SelectOptions } from "../DummyData/DummyDataType";
import SelectInput from "../components/Form/SelectInput/SelectInput";
import { propsType } from "./GlobalType";
import { classNameMaker, mapEl, printVariable } from "./helperFunction";
import { SelectOption } from "@mui/material/node_modules/@mui/base";
import { FormComponetsExportMui } from "../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { DialogProps, TextFieldProps } from "@mui/material";
import SelectInputMui from "../components/MUI/FormCompnents/SelectInputMui/SelectInputMui";
import { SelectInputPropsMui } from "../components/MUI/FormCompnents/MUIFormComponentsType";
import { DialogsMuiTypeProps } from "../components/MUI/UIComponents/DialogMui/DialogMuiTypes";
import DialogMui from "../components/MUI/UIComponents/DialogMui/DialogMui";
//print state

export const useFollowState = (...args: Record<string, any>[]) => {
  useEffect(() => {
    console.log("useFollowState");
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

  const SelectInputEL = useCallback(
    ({ className, ...rest }: Omit<SelectInputPropsMui, "options">) => {
      return (
        <SelectInputMui
          value={selectState}
          options={options.options}
          onChange={({ target: { value } }) => {
            setSelectState(value);
          }}
          className={className}
          {...rest}
        />
      );
    },
    [selectState]
  );
  return { selectState: selectState as T, setSelectState, SelectInputEL };
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

export const useGetDialogWithOpenState = () => {
  const [stateIsOpen, setStateIsOpen] = useState(false);
  const el = useCallback(
    ({
      children,
      title,
      ...rest
    }: { title?: string } & propsType & Omit<DialogProps, "open">) => {
      return (
        <DialogMui
          open={stateIsOpen}
          title={title}
          onClose={() => setStateIsOpen(false)}
          {...rest}
        >
          {children}
        </DialogMui>
      );
    },
    [stateIsOpen]
  );
  return { stateIsOpen, setStateIsOpen, DialogMui: el };
};
