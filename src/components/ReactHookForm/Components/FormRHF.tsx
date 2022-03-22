import React, { Children } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { classNameMaker } from "../../../helpers/helperFunction";
import { FormType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";

function Form<T extends FieldValues>({
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

export default Form;
