import { FormComponetsExportMui } from "../../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";

import { propsType } from "../../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../../helpers/helperFunction";

import FormAddressDetails from "./FormAddressDetails/FormAddressDetails";
import ST from "./AddressDetails.module.scss";

const { FormControl, TextField } = FormComponetsExportMui;
function AddressDetails({ className }: propsType) {
  return (
    <div className={classNameMaker(className)}>
      <div className={classNameMaker(ST.personalData_address_header)}>
        <h2> Address Details</h2>
      </div>
      <FormAddressDetails />
    </div>
  );
}

export default AddressDetails;
