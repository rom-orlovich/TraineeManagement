import {
  Control,
  FieldValues,
  Path,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import { ReactDispatch } from "../../../../../helpers/GlobalType";

import { idGenertor } from "../../../../../helpers/helperFunction";
import { ReturnButtonsHookStateOAType } from "../helpersOA/helperHooksOATypes";

export type EditOrAddOptionsFormsType = "sources" | "products" | "expenses";
export type stateButtonsFormsOAType = "add" | "edit";

export interface OptionInterface {
  id?: string;
  nameOption: string;
}
interface ExpenseOrProductsInterface extends OptionInterface {
  price: string;
  quantity?: number;
}
export interface SourcesInterface extends OptionInterface {}
export interface ExpensesInterface extends ExpenseOrProductsInterface {}
export interface ProductsInterface extends ExpenseOrProductsInterface {}

export type OptionTypeData<T> = T[];

export interface FormValueAddingOption<T>
  extends Omit<ExpensesInterface, "nameOption"> {
  mode: boolean;
  options: T | string;
  quantity?: number;
}

export interface FormValuesSourcesInterface<T>
  extends Omit<OptionInterface, "nameOption"> {
  mode: boolean;
  id?: string;

  options: T | string;
}
export type FormValuesProducts = FormValueAddingOption<ProductsInterface>;
export type FormValuesExpenses = FormValueAddingOption<ExpensesInterface>;
export type FormValuesSources = FormValuesSourcesInterface<SourcesInterface>;

export const producsOptions: OptionTypeData<ProductsInterface> = [
  {
    id: idGenertor(),
    nameOption: "Training Plan",
    price: "100",
    quantity: undefined,
  },
  {
    id: idGenertor(),
    nameOption: "Nutrition plan",
    price: "200",
    quantity: undefined,
  },
  {
    id: idGenertor(),
    nameOption: "Personal Training",
    price: "150",
    quantity: undefined,
  },
];

export const expenseOptions: OptionTypeData<ExpensesInterface> = [
  {
    id: idGenertor(),
    nameOption: "Rent",
    price: "2000",
    quantity: undefined,
  },
  {
    id: idGenertor(),
    nameOption: "Taxes",
    price: "500",
    quantity: undefined,
  },
  {
    id: idGenertor(),
    nameOption: "Weights",
    price: "1500",
    quantity: undefined,
  },
];

export const sourceOptions: OptionTypeData<SourcesInterface> = [
  {
    id: idGenertor(),
    nameOption: "Instagram",
  },
  {
    id: idGenertor(),
    nameOption: "Facebook",
  },
  {
    id: idGenertor(),
    nameOption: "Google",
  },
];

export const defaultProductsValuesForm: FormValuesProducts = {
  mode: false,
  id: "",
  options: { id: "", nameOption: "", price: "", quantity: undefined },
  price: "",
};
export const defaultExpensesValuesForm: FormValuesExpenses = {
  mode: false,
  options: { id: "", nameOption: "", price: "" },
  price: "",
};

export const defaultSourcesValuesForm: FormValuesSources = {
  mode: false,
  id: "",

  options: { id: "", nameOption: "" },
};

export type ButtonsEditOrAddProps<
  O extends OptionInterface,
  FormValues extends { mode: boolean }
> = {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  optionsValue: OptionTypeData<O>;
  control: Control<FormValues, any>;
  checkBoxName: Path<FormValues>;
  state: {
    stateForm: Omit<ReturnButtonsHookStateOAType, "getOptionDisabled">;
    setStateForm: ReactDispatch<stateButtonsFormsOAType>;
  };
};

export type OnChangeCheckBoxOAType<T extends FieldValues = { mode: boolean }> =
  (
    setValue: UseFormSetValue<T>,
    reset: UseFormReset<T>,
    setStateForm: ReactDispatch<stateButtonsFormsOAType>
  ) => OnChangeCheckBoxMuiType;

type OnChangeCheckBoxMuiType = (
  event: React.ChangeEvent<HTMLInputElement>,
  checked: boolean
) => void;
