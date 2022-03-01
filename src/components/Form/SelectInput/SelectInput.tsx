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
  SetValueOnChange?: (value: string) => any;
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
          <option
            key={`option-${el.id ?? el.value + "-" + el.text}`}
            value={el.value}
          >
            {el.text}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInput;
