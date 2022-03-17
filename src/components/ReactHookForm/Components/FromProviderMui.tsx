import React, { Children } from "react";
import { FieldValues } from "react-hook-form";
import { propsType } from "../../../helpers/GlobalType";
import { FormProviderMuiType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";
const { FormProvider, useForm } = UtilitesRHF;
function FormProviderMui<T extends FieldValues>({
  children,
  values,
}: FormProviderMuiType<T>) {
  const methods = useForm<T>(values);

  return (
    <FormProvider {...methods}>
      {typeof children === "function" ? children(methods) : children}
      {/* {React.Children.map(children, (child) => {
        console.log(child);
        return child;
      })} */}
      {/* {children} */}
    </FormProvider>
  );
}

export default FormProviderMui;
