import React from "react";
import { classNameMaker, mapEl } from "../../../helpers/helperFunction";
import { AnyFun, propsType } from "../../../helpers/GlobalType";
import ST from "./SelectInput.module.scss";
import { SelectOptions } from "../../../DummyData/DummyDataType";

function SelectInput({
  className,
  data,
  SetValueOnChange,
}: propsType & {
  data: SelectOptions;
  SetValueOnChange?: (value: any) => any;
}) {
  return (
    <select
      id={data.name}
      name={data.name}
      className={classNameMaker(className)}
      onChange={(e) => {
        SetValueOnChange && SetValueOnChange(e.target.value);
      }}
    >
      {mapEl(data.options, (el) => {
        return (
          <option key={`option-${el.value + "-" + el.label}`} value={el.value}>
            {el.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInput;
