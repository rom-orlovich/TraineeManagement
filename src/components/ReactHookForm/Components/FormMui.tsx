import React, { Children } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { FormType } from "../TypesFormComponent";
import { UtilitesRHF } from "../UtilitesRHF";

function Form<T extends FieldValues>({
  children,

  submitFun,
}: FormType<T>) {
  return <form onSubmit={submitFun}>{children}</form>;
}

export default Form;
