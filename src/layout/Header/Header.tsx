import React from "react";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import { iconsLinks } from "../../style/icons/icons";
import UserProfile from "./UserProfile/UserProfile";
import AlertBar from "./AlertBar/AlertBar";

import NavList from "../../components/Nav/NavList/NavList";
import ST from "./Header.module.scss";
const { FaUserCircle, IoIosAddCircle } = iconsLinks;
function Header({ className }: propsType) {
  // const { stateBool, onMouseEnter, onMouseLeave } = useManageMouseFun();
  return (
    <header className={classNameMaker(ST.Header, className)}>
      <div className={classNameMaker(ST.navHeader)}>
        <div className={classNameMaker(ST.navHeader_search)}>
          <input placeholder="search"></input>
        </div>

        <div className={classNameMaker(ST.userMenu)}>
          <NavList
            className={classNameMaker(ST.posAddButton)}
            list={[]}
            el={
              <IoIosAddCircle
                className={classNameMaker(ST.navAddButton)}
              ></IoIosAddCircle>
            }
          ></NavList>

          <NavList
            className={classNameMaker(ST.posNavAlert)}
            list={[]}
            el={<AlertBar />}
          ></NavList>

          <NavList
            list={[]}
            className={classNameMaker(ST.posNavUserProfile)}
            el={<UserProfile />}
          ></NavList>
        </div>
      </div>
    </header>
  );
}

export default Header;
