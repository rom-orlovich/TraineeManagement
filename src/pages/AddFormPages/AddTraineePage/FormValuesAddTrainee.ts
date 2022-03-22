import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";

export interface FormValuesAddTraineeInterface {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  age: number;
  identifyNumber: string;
  phoneNumber: string;
  email: string;
  address: string;
  numAddress: number;
  city: string;
  country: string;
  plan: string;
  startingDate: string;
  endingDate: string;
  price: string;
}

export const FormValuesAddTrainee: FormValuesAddTraineeInterface = {
  //personal detials
  firstName: "",
  lastName: "",
  gender: "",
  birthday: "",
  age: 0,
  identifyNumber: "",
  //contact
  phoneNumber: "",
  email: "",
  address: "",
  numAddress: 0,
  city: "",
  country: "",
  //plan
  plan: "",
  startingDate: "",
  endingDate: "",
  price: "",
};

const { yup, yupResolver } = UtilitesRHF;
export const schema = yupResolver(yup.object({}));
