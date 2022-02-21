import React from "react";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../Types/GlobalType";
import ST from "./Card.module.scss";

function Card({ className, children }: propsType) {
  return <div className={classNameMaker(ST.Card, className)}>{children}</div>;
}

export default Card;
