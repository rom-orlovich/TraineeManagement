import React, { useState } from "react";
import { classNameMaker, mapEl } from "../../helpers/helperFunction";
import { JSXcomponentType, propsType } from "../../helpers/GlobalType";

function ListElements({
  content,
  ElementCom,
}: propsType & {
  content: any[];
  ElementCom: JSXcomponentType;
}) {
  return (
    <>
      {mapEl(content, (el) => {
        return (
          <ElementCom
            key={`${parseFloat(
              Math.random().toString().split(".")[1]
            )}-${parseFloat(Math.random().toString().split(".")[1])}`}
            el={el}
          />
        );
      })}
    </>
  );
}

export default ListElements;
