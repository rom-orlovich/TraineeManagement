import { IconsSideNavBarType } from "../style/icons/iconType";

export interface LinkType {
  name: string;
  to: string;
  icons?: IconsSideNavBarType;
  subLinks?: LinkType[];
}

export type LinksListType = LinkType[];
