import React, { useEffect } from "react";

import { classNameMaker } from "../../helpers/helperFunction";
import ST from "./Leads.module.scss";
function Leads() {
  return <section className={classNameMaker(ST.leads_Layout)}></section>;
}

export default Leads;
