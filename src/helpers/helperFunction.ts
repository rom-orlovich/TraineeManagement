import { AnyFun, IdType, ObjExtendIDKey } from "./GlobalType";

export const mapEl = (elArr: any[], fun: AnyFun) => {
  return elArr.map(fun);
};

export const classNameMaker = (...className: (string | any)[]) => {
  return `${[...className].join(" ")}`;
};
export const checkPositive = (text: string | number) =>
  text ? isFinite(+text) && parseFloat(`${text}`) > 0 : false;

export const findById = <T>(id: IdType, arr: ObjExtendIDKey<T>[]) =>
  arr.find((el) => el.id === id);

export const filterById = <T>(id: IdType, arr: ObjExtendIDKey<T>[]) =>
  arr.filter((el) => el.id !== id);
