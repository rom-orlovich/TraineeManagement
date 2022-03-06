import React, {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export type AnyFun<T> = (...args: any[]) => T;
export type JSXcomponentType = (...args: any[]) => JSX.Element;
export type propsType = { children?: ReactNode; className?: string };
export type MouseEventHook = {
  onMouseEnter?: AnyFun<any>;
  onMouseLeave?: AnyFun<any>;
  stateBool?: boolean;
};

export type IdType = string | number;
export type ObjExtendIDKey<T> = T & { id: IdType };
export type PeriodType = "daily" | "weekly" | "monthly" | "yearly";
