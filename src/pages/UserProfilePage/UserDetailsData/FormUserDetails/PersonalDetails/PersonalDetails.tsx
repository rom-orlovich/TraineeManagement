import { propsType } from "../../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../../helpers/helperFunction";
import FormPerosnalDetails from "./FormPersonalDetails/FormPerosnalDetails";

import ST from "./PersonalDetails.module.scss";

function PersonalDetails({ className }: propsType) {
  return (
    <div className={classNameMaker(className)}>
      <h2 className={classNameMaker(ST.form_Header)}>Personal Details</h2>

      <FormPerosnalDetails />
    </div>
  );
}

export default PersonalDetails;
