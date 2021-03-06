import React, { Children } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { classNameMaker } from "../../../helpers/helperFunction";
import { FormType } from "../RHFFormComponentsTypes";
import { UtilitesRHF } from "../UtilitesRHF";

function FormRHF<T extends FieldValues>({
  children,
  submitFun,
  className,
  ...rest
}: FormType<T>) {
  return (
    <form className={classNameMaker(className)} onSubmit={submitFun} {...rest}>
      {children}
    </form>
  );
}

export default FormRHF;
