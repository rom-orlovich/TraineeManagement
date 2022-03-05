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
// export type ObjHasOtherObj<T, K> = T extends { [p in keyof K]: any } ? T : never;
// export type ObjHasKey<T, K> = K extends keyof T ? T : never;
