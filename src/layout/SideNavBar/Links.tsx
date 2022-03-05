import { SideNavLinksType } from "./SideNavBarTypes";
import { iconsLinks } from "../../style/icons/icons";
import { IconsSideNavBarType } from "../../style/icons/iconType";

const {
  BsFillCalendarDateFill,
  MdViewHeadline,
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
  BsFillPeopleFill,
  MdOutlineAttachMoney,
  AiFillSetting,
  MdOutlineSummarize,
  CgProfile,
  BiLineChart,
  BiTransfer,
  IoIosStats,
  SiGoogleads,
} = iconsLinks;
const iconsWithArrow = (...icons: IconsSideNavBarType) => [
  IoIosArrowForward,
  IoIosArrowDown,

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
    icons: iconsWithArrow(MdOutlineAttachMoney),
    subLinks: [
      { name: "Activities", to: "financial/activities", icons: [BiTransfer] },
    ],
  },

  { name: "Analytics", to: "/analytics", icons: [IoIosStats] },
  // { name: "Setting", to: "/setting", icons: [AiFillSetting], subLinks: [] },
];
