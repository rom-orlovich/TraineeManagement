import { IconsSideNavBarType } from "../../style/icons/iconType";

export interface SideNavLinkType {
  name: string;
  to: string;
  icons?: IconsSideNavBarType;
  subLinks?: SideNavLinkType[];
}

export type SideNavLinksType = SideNavLinkType[] | [];
