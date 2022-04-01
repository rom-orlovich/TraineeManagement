import { date } from "yup/lib/locale";
import { idGenertor } from "../../../../helpers/helperFunction";

export type EditOptionsType = "sources" | "products" | "expenses";
export type stateFormType = "add" | "edit";
export interface OptionInterface {
  id?: string;
  nameOption: string;
}
export interface ExpensesInterface extends OptionInterface {
  price: string;
  quantity?: number;
}
export interface ProductsInterface extends ExpensesInterface {}
export interface SourcesInterface extends OptionInterface {}

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

// export type HookOptionAddType<O extends OptionInterface>=
//   {optionsValue: OptionTypeData<O>}
