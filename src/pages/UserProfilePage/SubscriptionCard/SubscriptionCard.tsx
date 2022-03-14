import { useLocation } from "react-router";

import { FormComponents } from "../../../components/Form/SelectInput/MuiForm/MuiFormComponets";
import Card from "../../../components/UI/Card/Card";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";
import ST from "./SubscriptionCard.module.scss";
import { iconsLinks } from "../../../style/icons/icons";
import { Link } from "react-router-dom";

function SubscriptionCard({ className }: propsType) {
  const location = useLocation();

  return (
    <div className={classNameMaker(ST.subscription)}>
      <Card className={classNameMaker(ST.subscription_userAccountData)}>
        <div
          className={classNameMaker(ST.subscription_userAccountData_content)}
        >
          <div
            className={classNameMaker(
              ST.subscription_userAccountData_content_picture
            )}
          >
            <iconsLinks.FaUserCircle
              style={{ width: "100%", height: "100%" }}
              color="#9da7af"
            ></iconsLinks.FaUserCircle>
          </div>
          <div
            className={classNameMaker(
              ST.subscription_userAccountData_content_details
            )}
          >
            <span className={classNameMaker(ST.userName)}>Admin</span>
          </div>
          <div className={classNameMaker(ST.actions)}>
            <Link to="/userProfile/admin"> Change Email </Link>
            <Link to="/userProfile/admin"> Change Password </Link>
          </div>
        </div>
      </Card>
      <Card className={classNameMaker(ST.subscription_status)}>
        <div> </div>
      </Card>
    </div>
  );
}

export default SubscriptionCard;
