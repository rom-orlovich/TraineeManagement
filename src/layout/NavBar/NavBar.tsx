import React, { useReducer } from "react";
import { classNameMaker } from "../../helpers/helperFunction";
import { propsType } from "../../helpers/GlobalType";

import { iconsLinks } from "../../style/icons/icons";

import AlertBar from "./AlertBar/AlertBar";

import NavList from "../../components/Nav/NavList/NavList";

import UserProfileIcon from "./UserProfile/UserProfileIcon";
import { Link } from "react-router-dom";
import { addButtonlinks } from "./UserProfile/NavBarLinks";
import ST from "./NavBar.module.scss";
import { reducerNavBar, initialStateNavBar } from "./useRedcuer";
const { IoIosAddCircle } = iconsLinks;

function NavBar({ className }: propsType) {
  const [stateNavBar, dispatchStateNavBar] = useReducer(
    reducerNavBar,
    initialStateNavBar
  );
  return (
    <header className={classNameMaker(className)}>
      <nav className={classNameMaker(ST.navHeader)}>
        <span className={classNameMaker(ST.navHeader_search)}>
          <input placeholder="search"></input>
        </span>

        <span className={classNameMaker(ST.userMenu)}>
          <NavList
            id="addButton"
            state={stateNavBar.addButton}
            dispatch={dispatchStateNavBar}
            className={classNameMaker(ST.posAddButton)}
            listLinks={addButtonlinks}
            el={
              <IoIosAddCircle
                className={classNameMaker(ST.navAddButton)}
              ></IoIosAddCircle>
            }
          ></NavList>

          <NavList
            id="alerts"
            state={stateNavBar.alerts}
            dispatch={dispatchStateNavBar}
            className={classNameMaker(ST.posNavAlert)}
            listLinks={[]}
            el={<AlertBar />}
          ></NavList>
          <NavList
            id="profileMenu"
            state={stateNavBar.profileMenu}
            dispatch={dispatchStateNavBar}
            listLinks={[]}
            className={classNameMaker(ST.posNavUserProfile)}
            el={
              <Link to="/userProfile/Admin">
                <UserProfileIcon />
              </Link>
            }
          ></NavList>
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
