import { IconsSideNavBarType } from "../../style/icons/iconType";

export type SideNavLinkType = {
  name: string;
  to: string;
  icons?: IconsSideNavBarType;
  subLinks?: SideNavLinkType[];
};

export type SideNavLinksType = SideNavLinkType[] | [];
