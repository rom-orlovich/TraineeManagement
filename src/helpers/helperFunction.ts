import { AnyFun } from "../Types/GlobalType";

export const mapEl = (elArr: any[], fun: AnyFun) => {
  return elArr.map(fun);
};

export const classNameMaker = (...className: (string | any)[]) => {
  return `${[...className].join(" ")}`;
};
export const checkPositive = (text: string | number) =>
  text ? isFinite(+text) && parseFloat(`${text}`) > 0 : false;
