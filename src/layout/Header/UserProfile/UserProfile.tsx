import React, { useState } from "react";

import { iconsLinks } from "../../../style/icons/icons";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../Types/GlobalType";
import ST from "./UserProfile.module.scss";
const { FaUserCircle } = iconsLinks;
function UserProfile({ className }: propsType) {
  return (
    <div className={classNameMaker(className)}>
      <span>
        <FaUserCircle className={classNameMaker(ST.profileIcon)}></FaUserCircle>
      </span>
    </div>
  );
}

export default UserProfile;
