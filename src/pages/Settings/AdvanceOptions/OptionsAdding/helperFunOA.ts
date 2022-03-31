import { ProductInterface } from "../../../../DummyData/DummyDataType";
import { AnyFun, ReactDispatch } from "../../../../helpers/GlobalType";
import {
  filterById,
  findByID,
  idGenertor,
} from "../../../../helpers/helperFunction";
import {
  FormValuesProducts,
  OptionTypeData,
  ProductsInterface,
} from "./OptionAddingTypes";

export const getOptionLabel = (o: any) => {
  return typeof o === "object" ? o.nameOption : o;
};

export function getOptionDisable(o: ProductsInterface) {
  return o.id !== "";
}
export function addOrEdit<T>(
  arr: T[],
  id: string,
  funEdit: AnyFun<T>,
  funADD: () => T
): T[] {
  const checkExist = findByID(id, arr);
  if (checkExist) {
    const filterArr = filterById(id, arr);
    return [funEdit(), ...filterArr];
  } else return [...arr, funADD()];
}

export function setData<T>(
  data: FormValuesProducts,
  setState: ReactDispatch<OptionTypeData<ProductsInterface>>
) {
  const { id, price, options, quantity } = data;
  if (!options) return;
  const optionData = {
    nameOption: typeof options === "object" ? options.nameOption : options,
    price,
    quantity,
  };
  const funEdit = () => {
    return {
      id,
      ...optionData,
    };
  };
  const funAdd = () => {
    return {
      id: idGenertor(),
      ...optionData,
    };
  };
  setState((pre) => [...addOrEdit(pre, id || "", funEdit, funAdd)]);
}
