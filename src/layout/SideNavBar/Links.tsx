import { SideNavLinksType } from "./SideNavBarTypes";
import { iconsLinks } from "../../style/icons/icons";
import { IconsSideNavBarType } from "../../style/icons/iconType";

const {
  BsFillCalendarDateFill,
  MdViewHeadline,
  BiChevronUp,
  BiChevronDown,
  BsFillPeopleFill,
  MdOutlineAttachMoney,
  AiFillSetting,
  MdOutlineSummarize,
  CgProfile,
  BiLineChart,
  SiGoogleads,
} = iconsLinks;
const iconsWithArrow = (...icons: IconsSideNavBarType) => [
  BiChevronUp,
  BiChevronDown,
  ...icons,
];

export const Links: SideNavLinksType = [
  {
    name: "Overview",
    to: "/",
    icons: [MdOutlineSummarize],
    subLinks: [],
  },
  {
    name: "Calender",
    to: "/calender",
    icons: [BsFillCalendarDateFill],
    subLinks: [],
  },
  {
    name: "Trainees",
    to: "/trainees",
    icons: [BsFillPeopleFill],
    subLinks: [],
  },
  {
    name: "Leads",
    to: "/leads",
    icons: [SiGoogleads],
    subLinks: [],
  },
  {
    name: "Financial",
    to: "/financial",
    icons: [MdOutlineAttachMoney],
    subLinks: [],
  },
  { name: "Setting", to: "/Setting", icons: [AiFillSetting], subLinks: [] },
];
