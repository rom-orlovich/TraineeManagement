import { AnyFun, IdType, ObjExtendIDKey } from "./GlobalType";

export const mapEl = <T>(
  elArr: T[],
  fun: (el: T, i?: number, arr?: T[]) => any
) => {
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

let array = (numMin = 0, numMax = 30) => {
  let arr = [];
  for (let i = 0; i < 12; i++)
    arr.push(Math.floor(numMin + Math.random() * numMax - numMin));

  return arr;
};
// @ts-ignore
let diffArray = (arr1, arr2) => arr1.map((el, i) => Math.abs(el - arr2[i]));
