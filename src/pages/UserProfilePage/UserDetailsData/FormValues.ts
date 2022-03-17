import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";

export interface FormValues {
  firstName: string;
  familyName: string;
  gender: string;
  birthday: string;
  age: number;
  identifier: number;
  email: string;
  phoneNumber: number;

  address: string;
  numHome: number;
  city: string;
  country: string;
  zip: number;
}

const { useForm, yupResolver, yup } = UtilitesRHF;
export const schema = yup.object({
  firstName: yup.string(),
  familyName: yup.string(),
  gender: yup.string(),
  birthday: yup.string(),
  age: yup.number(),
  identifier: yup.number(),
  email: yup.string(),
  phoneNumber: yup.number(),

  address: yup.string(),
  numHome: yup.number(),
  city: yup.string(),
  country: yup.string(),
  zip: yup.number(),
});
export const yupResolverSchema = yupResolver(schema);
