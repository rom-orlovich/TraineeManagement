import React, { useState } from "react";

import { iconsLinks } from "../../../style/icons/icons";
import { classNameMaker } from "../../../helpers/helperFunction";
import { propsType } from "../../../helpers/GlobalType";
import ST from "./UserProfileIcon.module.scss";
const { FaUserCircle } = iconsLinks;
function UserProfileIcon({ className }: propsType) {
  return (
    <div className={classNameMaker(className)}>
      <FaUserCircle className={classNameMaker(ST.profileIcon)}></FaUserCircle>
    </div>
  );
}

export default UserProfileIcon;
