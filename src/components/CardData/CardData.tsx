import React, { useState } from "react";

import { iconsLinks } from "../../style/icons/icons";
import { checkPositive, classNameMaker } from "../../helpers/helperFunction";
import { JSXcomponentType, propsType } from "../../Types/GlobalType";

import Card from "../UI/Card/Card";
import ST from "./CardData.module.scss";
function CardData({
  className,
  heading,
  text,
  change,
  Element,
}: propsType & {
  heading?: string;
  text?: string;
  change?: string;
  Element?: JSXcomponentType;
}) {
  const positiveText = checkPositive(text as string);
  const postiveChange = checkPositive(change as string);

  return (
    <Card className={classNameMaker(ST.block, className)}>
      <div
        className={classNameMaker(
          text
            ? positiveText
              ? ST.lineIndicator_positive
              : ST.lineIndicator_negative
            : ""
        )}
      ></div>
      {Element ? (
        <Element />
      ) : (
        <>
          <h3>{heading} </h3>
          <span> {text}</span>{" "}
          <span
            style={{
              color: `${
                change === "0" ? "grey" : postiveChange ? "green" : "red"
              }`,
            }}
          >
            {`${change === "0" ? "" : postiveChange ? "+" : ""}${change} %`}
          </span>
        </>
      )}
    </Card>
  );
}

export default CardData;
