import React, { ReactNode, useState } from "react";

import { iconsLinks } from "../../style/icons/icons";
import { checkPositive, classNameMaker } from "../../helpers/helperFunction";
import { JSXcomponentType, propsType } from "../../helpers/GlobalType";

import Card from "../UI/Card/Card";
import ST from "./CardData.module.scss";
function CardData({
  className,
  heading,
  text,
  change,
  Element,
  displayIndicator = true,
  displayPrecentage = true,
  displayIndicatorPositive = true,
  symbolText,
  timeLine,
}: propsType & {
  heading?: string;
  text?: string;
  timeLine?: string;
  symbolText?: string;
  displayIndicator?: boolean;
  displayIndicatorPositive?: boolean;
  displayPrecentage?: boolean;
  change?: string;
  Element?: ReactNode;
}) {
  const positiveText = checkPositive(text as string);
  const postiveChange = checkPositive(change as string);

  return (
    <Card className={classNameMaker(ST.block, className)}>
      {displayIndicator && (
        <div
          className={classNameMaker(
            text
              ? positiveText && displayIndicatorPositive
                ? ST.lineIndicator_positive
                : ST.lineIndicator_negative
              : ""
          )}
        ></div>
      )}
      {Element ? (
        Element
      ) : (
        <>
          <h3>{heading} </h3>
          <span>
            {text}
            {symbolText ? symbolText : ""}
          </span>
          <span>{timeLine ? timeLine : ""} </span>
          {displayPrecentage && (
            <span
              style={{
                color: `${
                  change === "0" ? "grey" : postiveChange ? "green" : "red"
                }`,
              }}
            >
              {`${change === "0" ? "" : postiveChange ? "+" : ""}${change} %`}
            </span>
          )}
        </>
      )}
    </Card>
  );
}

export default CardData;
