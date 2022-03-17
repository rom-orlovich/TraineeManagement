import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import DateAdapter from '@mui/lab';
export const UtilitesRHF = {
  useForm,
  Controller,
  yup,
  yupResolver,
  FormProvider,
  useFormContext,
};
