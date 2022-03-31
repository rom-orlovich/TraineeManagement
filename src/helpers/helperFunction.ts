import { OptionObjWithPrice, ObjExtendIDKey, OptionObj } from "./GlobalType";

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

export const arrIsEmpty = (arr: any[]) => arr.length === 0;

export const findByID = <T>(
  id: string | undefined,
  arr: ObjExtendIDKey<T>[]
) => {
  return id ? arr.find((el) => el.id === id) : false;
};

export const filterById = <T>(
  id: string | undefined,
  arr: ObjExtendIDKey<T>[]
) => {
  return id ? arr.filter((el) => el.id !== id) : arr;
};

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

export function getExactPriceProductList<T extends OptionObjWithPrice[]>(
  objArr: T,
  value: string
) {
  return objArr.find((el) => el.value === value)?.price || 0;
}

export function createNewSelectOptionsArray(
  obj: (OptionObjWithPrice | OptionObj)[]
): {
  label: string;
  value: string;
}[] {
  return obj.map(({ value, name }) => {
    return { label: name, value };
  });
}

export const setPropsToBoolean = <T>(
  obj: T,
  bool: boolean,
  ...keys: (keyof T)[]
) => {
  let newObj = {};
  for (const p in obj)
    newObj = { ...newObj, [p]: keys.some((el) => el === p) ? bool : !bool };

  return newObj;
};

export function setSomeKeyStateTrue<T>(obj: T, ...keys: (keyof T)[]) {
  return {
    ...obj,
    ...setPropsToBoolean(obj, true, ...keys),
  };
}

export function setSomeKeyStateFalse<T>(obj: T, ...keys: (keyof T)[]) {
  return {
    ...obj,
    ...setPropsToBoolean(obj, false, ...keys),
  };
}

export const captialFirstLetter = (str: string) => {
  const newStr = str.toLocaleLowerCase();
  return newStr[0].toUpperCase() + newStr.slice(1);
};

const objValue = {
  string: "",
  number: 0,
  boolean: false,
  object: {},
  bigint: 0,
  function: (...arg: any[]) => {},
  symbol: Symbol(""),
  undefined: undefined,
};

export function getInitObj<T extends object>(obj: T) {
  let newObj = {};
  for (const p in obj) {
    const typeValue = typeof obj[p];
    newObj = { ...newObj, [p]: objValue[typeValue] };
  }
  return newObj as T;
}

export const idGenertor = () =>
  Math.floor(Date.now() * Math.random() * 100) +
  "" +
  Math.round(1 + Math.random() * 100);
