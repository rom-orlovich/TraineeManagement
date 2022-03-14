import { useLocation } from "react-router";
import { FormComponents } from "../../components/Form/SelectInput/MuiForm/MuiFormComponets";

import Card from "../../components/UI/Card/Card";

import { propsType } from "../../helpers/GlobalType";
import { classNameMaker } from "../../helpers/helperFunction";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";
import AddressDetails from "./UserDetailsData/AddressDetails";
import PersonalDetails from "./UserDetailsData/PersonalDetails";
import ST from "./UserProfilePage.module.scss";

function UserProfilePage({ className }: propsType) {
  const location = useLocation();
  const { Button } = FormComponents;
  return (
    <section className={classNameMaker(ST.userProfilePage, className)}>
      <Card className={classNameMaker(ST.userProfilePage_personalData)}>
        <PersonalDetails
          className={classNameMaker(ST.userProfilePage_personalData_details)}
        />
        <AddressDetails
          className={classNameMaker(ST.userProfilePage_personalData_address)}
        />
        <div>
          <Button>Save Changes</Button>
        </div>
      </Card>

      <SubscriptionCard
        className={classNameMaker(ST.userProfilePage_subscription)}
      ></SubscriptionCard>
    </section>
  );
}

export default UserProfilePage;
