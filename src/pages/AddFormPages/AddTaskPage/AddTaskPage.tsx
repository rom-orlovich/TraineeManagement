import { useState } from "react";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import ST from "./AddTaskPage.module.scss";
function AddTaskPage({ className }: propsType) {
  return (
    <section
      className={classNameMaker(ST.activities_layout, className)}
    ></section>
  );
}

export default AddTaskPage;
