import { FormComponetsExportMui } from "../../../../../components/MUI/FormComponetsExport/FormComponetsExportMui";

import { propsType } from "../../../../../helpers/GlobalType";
import { classNameMaker } from "../../../../../helpers/helperFunction";

import FormAddressDetails from "./FormAddressDetails/FormAddressDetails";
import ST from "./AddressDetails.module.scss";

const { FormControl, TextField } = FormComponetsExportMui;
function AddressDetails({ className }: propsType) {
  return (
    <div className={classNameMaker(ST, className)}>
      <h2 className={classNameMaker(ST.form_Header)}> Address Details</h2>

      <FormAddressDetails />
    </div>
  );
}

export default AddressDetails;
