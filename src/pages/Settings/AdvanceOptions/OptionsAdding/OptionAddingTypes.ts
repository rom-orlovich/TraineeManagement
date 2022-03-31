import { date } from "yup/lib/locale";
import { idGenertor } from "../../../../helpers/helperFunction";

export type EditOptionsType = "sources" | "products" | "expenses";

export interface OptionInterface {
  id?: string;
  nameOption: string;
}
export interface ExpensesInterface extends OptionInterface {
  price: string;
}
export interface ProductsInterface extends ExpensesInterface {
  quantity?: number;
}
export interface SourcesInterface extends OptionInterface {}

export type OptionTypeData<T> = T[];

export interface FormValuesExpensesInterface<T>
  extends Omit<ExpensesInterface, "nameOption"> {
  mode: boolean;
  options: T | string;
}

export interface FormValuesProductsInterface<T>
  extends FormValuesExpensesInterface<T> {
  quantity?: number;
}

export interface FormValuesSourcesInterface<T> {
  options: OptionTypeData<T>;
}
export type FormValuesProducts = FormValuesProductsInterface<ProductsInterface>;
export type FormValuesExpenses = FormValuesExpensesInterface<ExpensesInterface>;
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

// export const defaultProducsValuesForm = {
//   nameOption: "",
//   price: "",
//   quantity: undefined,
// };

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
  options: [{ id: "", nameOption: "" }],
};
