import React, {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { optionSelect } from "../DummyData/DummyData";

export type AnyFun<T> = (...args: any[]) => T;
export type JSXcomponentType = (...args: any[]) => JSX.Element;
export type propsType = { children?: ReactNode; className?: string };
export type MouseEventHook = {
  onMouseEnter?: AnyFun<any>;
  onMouseLeave?: AnyFun<any>;
  stateBool?: boolean;
};
export type ReactDispatch<T> = React.Dispatch<React.SetStateAction<T>>;
export type IdType = string | number;
export type ObjExtendIDKey<T> = T & { id: IdType };
export type TimeLinePeriodValueType =
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "years";

export type PageDataValueType = "trainees" | "leads" | "activities";
export type ActivitiesDataValueType = "incomes" | "expenses";
export type ChartPeriodValueType = "3" | "6" | "12";
export type OptionTypesValueType =
  | TimeLinePeriodValueType
  | PageDataValueType
  | ActivitiesDataValueType
  | ChartPeriodValueType;

export interface OptionObj {
  id: IdType;
  name: string;
  value: string;
}

export interface OptionObjWithPrice extends OptionObj {
  price: number;
}
