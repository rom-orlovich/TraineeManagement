import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import FormPersonalDetails from "./FromPersonalDetails/FormPersonalDetails";
import ST from "./PersonalDetails.module.scss";

function PersonalDetails({ className }: propsType) {
  return (
    <div className={classNameMaker(className)}>
      <div className={classNameMaker(ST.personalData_details_header)}>
        <h2> Personal Details</h2>
      </div>
      <div className={classNameMaker(ST.personalData_details_form)}>
        <FormPersonalDetails />
      </div>
    </div>
  );
}

export default PersonalDetails;
