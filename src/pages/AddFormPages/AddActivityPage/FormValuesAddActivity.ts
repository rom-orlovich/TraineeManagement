import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";

export interface FormValuesAddActivityInterface {
  date: string;
  nameBuyer: string;
  paymentTo: string;
  nameProduct: string;
  nameExpense: string;

  paymentType: string;
  paymentMethod: string;
  describe: string;

  quantity: number;
  price: string;
  totalPrice: string;
}
//income date  nameBuyer
// nameProduct  price   quantity
//  paymentType paymentMethod
//describe
//expense date nameExpense price quantity
// paymentTo paymentType paymentMethod
//  Total price
//describe
export const FormValuesAddActivity: FormValuesAddActivityInterface = {
  //personal detials

  date: "",
  nameBuyer: "",
  nameProduct: "",
  paymentType: "",
  paymentMethod: "",
  describe: "",
  quantity: 0,
  price: "",
  totalPrice: "",
  //contact
  // date: "",
  nameExpense: "",
  paymentTo: "",
  // paymentType: "",
  // paymentMethod:"",
  // describe: "",
  // quantity: 0,
  // price: "",
};

const { yup, yupResolver } = UtilitesRHF;
export const schema = yupResolver(yup.object({}));
