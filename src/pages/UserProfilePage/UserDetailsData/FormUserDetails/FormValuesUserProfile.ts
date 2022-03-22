import { FieldValue, FieldValues } from "react-hook-form";
import { UtilitesRHF } from "../../../../components/ReactHookForm/UtilitesRHF";

export interface FormValuesUserProfileInterface {
  firstName: string;
  familyName: string;
  gender: string;
  birthday: string;
  age: string;
  identifier: string;
  email: string;
  phoneNumber: string;

  address: string;
  numHome: string;
  city: string;
  country: string;
  zip: string;
}

export const FormValuesUserProfile = {
  firstName: "",
  familyName: "",
  gender: "",
  birthday: "",
  age: "",
  identifier: "",
  email: "",
  phone: "",

  address: "",
  numHome: "",
  city: "",
  country: "",
  zip: "",
};

const { useForm, yupResolver, yup } = UtilitesRHF;
export const schema = yup.object({
  // firstName: yup.string(),
  // familyName: yup.string(),
  // gender: yup.string(),
  // birthday: yup.string(),
  // age: yup.number(),
  // identifier: yup.number(),
  // email: yup.string(),
  // phoneNumber: yup.number().nullable(),
  // address: yup.string(),
  // numHome: yup.number(),
  // city: yup.string(),
  // country: yup.string(),
  // zip: yup.number(),
});
export const yupResolverSchema = yupResolver(schema);
