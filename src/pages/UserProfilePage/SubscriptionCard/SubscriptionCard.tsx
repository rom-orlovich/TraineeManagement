import { useLocation } from "react-router";

import { FormComponetsExportMui } from "../../../components/MUI/FormComponetsExport/FormComponetsExportMui";
import Card from "../../../components/UI/Card/Card";

import { propsType } from "../../../helpers/GlobalType";
import { classNameMaker } from "../../../helpers/helperFunction";

import { iconsLinks } from "../../../style/icons/icons";
import { Link } from "react-router-dom";
import ST from "./SubscriptionCard.module.scss";
function SubscriptionCard({ className }: propsType) {
  const location = useLocation();

  return (
    <div className={classNameMaker(ST.subscription, className)}>
      <Card className={classNameMaker(ST.subscription_userAccountData)}>
        <div
          className={classNameMaker(ST.subscription_userAccountData_content)}
        >
          <div className={classNameMaker(ST.user_picture)}>
            <iconsLinks.FaUserCircle
              style={{ width: "100%", height: "100%" }}
              color="#9da7af"
            ></iconsLinks.FaUserCircle>
          </div>
          <div className={classNameMaker(ST.user_details)}>
            <h3 className={classNameMaker(ST.userName)}>Admin</h3>
            <div className={classNameMaker(ST.actions)}>
              <Link to="/userProfile/admin"> Change Password </Link>
              <Link to="/userProfile/admin"> Change Email </Link>
            </div>
          </div>
        </div>
      </Card>
      <Card className={classNameMaker(ST.subscription_status)}>
        <div className={classNameMaker(ST.userStatus_details)}>
          <h3>User Subscription </h3>

          <div className={classNameMaker(ST.status)}>
            <span>Status:</span>
            <span>Active</span>
          </div>

          <div className={classNameMaker(ST.subscription_validity)}>
            <span className={classNameMaker(ST.startDate)}>
              <span>Start:</span>
              <span>12/03/21</span>
            </span>
            <span className={classNameMaker(ST.endDate)}>
              <span> End: </span>
              <span>12/03/21</span>
            </span>
          </div>

          <div className={classNameMaker(ST.actions)}>
            <Link to="/userProfile/admin"> Training Plan </Link>
            <Link to="/userProfile/admin"> Nutrition Plan </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SubscriptionCard;
