import { UtilitesRHF } from "../../../components/ReactHookForm/UtilitesRHF";

// export interface FormValuesAddTaskInterface {
//   date: string;

//   eventName: string;
//  participents:string

//   timeBegin: string;
//   timeEnd: string;

//   source: string;
//   notes: string;
// }
// date firstname lastname gender age
//city country phonenumber email  source
// note
// export const FormValuesAddTask: FormValuesAddTaskInterface = {
//   date: "",

//   //personal detials
//   firstName: "",
//   lastName: "",
//   gender: "",
//   age: 0,

//   //contact

//   city: "",
//   country: "",
//   phoneNumber: "",
//   email: "",

//   source: "",
//   //plan
//   notes: "",
// };

const { yup, yupResolver } = UtilitesRHF;
export const schema = yupResolver(yup.object({}));
