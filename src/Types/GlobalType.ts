import {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export type AnyFun = (...args: any[]) => void;
export type JSXcomponentType = (...args: any[]) => JSX.Element;
export type propsType = { children?: ReactNode; className?: string };
export type MouseEventHook = {
  onMouseEnter?: AnyFun;
  onMouseLeave?: AnyFun;
  stateBool?: boolean;
};
