import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";

export interface FormValuesAddLeadInterface {
  date: string;

  firstName: string;
  lastName: string;
  gender: string;
  age: number;

  city: string;
  country: string;
  phoneNumber: string;
  email: string;

  source: string;
  notes: string;
}
// date firstname lastname gender age
//city country phonenumber email  source
// note
export const FormValuesAddLead: FormValuesAddLeadInterface = {
  date: "",

  //personal detials
  firstName: "",
  lastName: "",
  gender: "",
  age: 0,

  //contact

  city: "",
  country: "",
  phoneNumber: "",
  email: "",

  source: "",
  //plan
  notes: "",
};

const { yup, yupResolver } = UtilitesRHF;
export const schema = yupResolver(yup.object({}));
