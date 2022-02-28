import React from "react";
import { classNameMaker, mapEl } from "../../../helpers/helperFunction";
import { AnyFun, propsType } from "../../../helpers/GlobalType";
import ST from "./SelectInput.module.scss";
import { SelectOptions } from "../../../DummyData/DummyDataType";

function SelectInput({
  className,
  data,
  fun,
}: propsType & { data: SelectOptions; fun?: AnyFun }) {
  return (
    <select
      id={data.name}
      name={data.name}
      className={classNameMaker(className)}
      onChange={(e) => {
        fun && fun(e.target.value);
      }}
    >
      {mapEl(data.options, (el) => {
        <option
          key={`option-${el.id ?? el.value + "-" + el.text}`}
          value={el.value}
        >
          {el.text}
        </option>;
      })}
    </select>
  );
}

export default SelectInput;
