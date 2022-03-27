import React, { Children } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { propsType } from "../../../helpers/GlobalType";
import { FormProviderMuiType } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";
const { FormProvider, useForm } = UtilitesRHF;
function FormProviderRHF<T extends FieldValues>({
  children,
  values,
}: FormProviderMuiType<T>) {
  const methods = useForm<T>(values);

  return (
    <FormProvider {...methods}>
      {typeof children === "function" ? children(methods) : children}
      {/* {children} */}
    </FormProvider>
  );
}

export default FormProviderRHF;
