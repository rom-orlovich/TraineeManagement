import { FaWeight } from "react-icons/fa";
import { datesValue } from "../DummyData/DummyData";
import {
  expenseExample,
  incomeExample,
  thisDay,
  totalExample,
} from "./AppVariables";
import {
  AnyFun,
  IdType,
  OptionObjWithPrice,
  ObjExtendIDKey,
  OptionObj,
} from "./GlobalType";

export const printVariable = (v: any) => {
  return Object.keys(v)[0];
};
export const mapEl = <T>(
  elArr: T[],
  fun: (el: T, i?: number, arr?: T[]) => any
) => {
  return elArr.map(fun);
};

export const classNameMaker = (...className: (string | any)[]) => {
  return `${[...className].join(" ")}`;
};
export const checkPositive = (text: string | number) => {
  return text ? isFinite(+text) && parseFloat(`${text}`) > 0 : false;
};

export const findById = <T>(id: IdType, arr: ObjExtendIDKey<T>[]) =>
  arr.find((el) => el.id === id);

export const filterById = <T>(id: IdType, arr: ObjExtendIDKey<T>[]) =>
  arr.filter((el) => el.id !== id);

export let arrayRandom = (numMin = 0, numMax = 30, length = 12) => {
  let arr = [];
  for (let i = 0; i < length; i++)
    arr.push(Math.floor(numMin + Math.random() * (numMax - numMin)));

  return arr;
};
export const sumArray = (arr: number[]) => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
};

// @ts-ignore
let arrayNumberUntilI = (length) => {
  let arr = [];
  for (let i = 1; i <= length; i++) arr.push(i);
  return arr;
};
// @ts-ignore
let diffArray = (arr1, arr2) => arr1.map((el, i) => Math.abs(el - arr2[i]));

export const setPropsToTrue = <T>(obj: T, ...keys: (keyof T)[]) => {
  let newObj = {};
  for (const p in obj) {
    {
      newObj = { ...newObj, [p]: keys.some((el) => el === p) ? true : false };
    }
  }

  return newObj;
};

export function getExactPriceProductList<T extends OptionObjWithPrice[]>(
  objArr: T,
  value: string
) {
  return objArr.find((el) => el.value === value)?.price || 0;
}

export function createNewSelectOptionsArray(
  obj: (OptionObjWithPrice | OptionObj)[]
) {
  return obj.map(({ value, name }) => {
    return { label: name, value };
  });
}
