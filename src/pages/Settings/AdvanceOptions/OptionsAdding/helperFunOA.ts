import { AnyFun, ReactDispatch } from "../../../../helpers/GlobalType";
import {
  filterById,
  findByID,
  idGenertor,
} from "../../../../helpers/helperFunction";
import {
  FormValuesProducts,
  FormValuesSources,
  OptionTypeData,
  ProductsInterface,
  SourcesInterface,
} from "./OptionAddingTypes";

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

export function setDataNotSource(
  data: FormValuesProducts,
  setState: ReactDispatch<OptionTypeData<ProductsInterface>>
) {
  const { id, price, options, quantity } = data;

  if (!options) return;

  if (!price || (typeof options === "object" && !options.nameOption)) return;
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

export function setDataSource(
  data: FormValuesSources,
  setState: ReactDispatch<OptionTypeData<SourcesInterface>>
) {
  const { id, options } = data;

  if (!options) return;

  if (typeof options === "object" && !options.nameOption) return;
  const optionData = {
    nameOption: typeof options === "object" ? options.nameOption : options,
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
