import { useLocation } from "react-router";
import { FormComponetsExportMui } from "../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import { UIComponentsExportMui } from "../../components/MUI/UIComponentsExport/UIComponentsExportMui";

import { UtilitesRHF } from "../../components/ReactHookForm/UtilitesRHF";

import Card from "../../components/UI/Card/Card";

import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";
import AddressDetails from "./UserDetailsData/AddressDetails";
import FormUserDetails from "./UserDetailsData/FormUserDetails";
import PersonalDetails from "./UserDetailsData/PersonalDetails";
import ST from "./UserProfilePage.module.scss";

const { Button } = FormComponetsExportMui;
const { useForm } = UtilitesRHF;
function UserProfilePage({ className }: propsType) {
  const location = useLocation();

  return (
    <section className={classNameMaker(ST.userProfilePage, className)}>
      <Card className={classNameMaker(ST.userProfilePage_personalData)}>
        {/* <PersonalDetails
          className={classNameMaker(ST.userProfilePage_personalData_details)}
        />
        <AddressDetails
          className={classNameMaker(ST.userProfilePage_personalData_address)}
        /> */}
        <FormUserDetails></FormUserDetails>
        <div>
          <Button style={{ paddingLeft: "1rem" }}>Save Changes</Button>
        </div>
      </Card>

      <SubscriptionCard
        className={classNameMaker(ST.userProfilePage_subscription)}
      ></SubscriptionCard>
    </section>
  );
}

export default UserProfilePage;
