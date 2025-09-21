// components/layout/LeftSidebarFixed.jsx
import React from "react";
import LeftNavSection from "./LeftNavSection";
import LeftNavItem from "./LeftNavItem";
import LeftNavGroup from "./LeftNavGroup";

import {
  Squares2X2Icon,
  ShoppingBagIcon,
  FolderOpenIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const WIDTH = "w-[264px]";

const LeftSidebar = ({selectedPage , onSelect}) => {
  return (
    <nav
      className={`${WIDTH} sticky top-0 h-screen border-r border-gray-200 dark:border-[#3f3f46] bg-white dark:bg-[#0f0f11] overflow-y-auto`}
    >
      {/* header user block */}
      <div className="px-4 py-6 flex items-center gap-2">
      <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-300 dark:bg-[#3f3f46]">
  <img
    src="https://i.pravatar.cc/40?img=11"
    alt="ByeWind"
    className="w-full h-full object-cover"
  />
</div>

        <span className="text-lg font-semibold text-gray-800 dark:text-[#f4f4f5]">
          ByeWind
        </span>
      </div>

      {/* Favorites */}
      <LeftNavSection label="Favorites">
        <LeftNavItem label="Overview" />
        <LeftNavItem label="Projects" />
      </LeftNavSection>

      {/* Dashboards */}
      <LeftNavSection label="Dashboards">
      <LeftNavItem
          icon={<Squares2X2Icon />}
          label="Default"
          selected={selectedPage === "Default"}
          onClick={() => onSelect("Default")}
        />
        <LeftNavItem
          icon={<ShoppingBagIcon />}
          label="eCommerce"
          selected={selectedPage === "eCommerce"}
          onClick={() => onSelect("eCommerce")}
        />
        <LeftNavItem
          icon={<FolderOpenIcon />}
          label="Projects"
          selected={selectedPage === "Projects"}
          onClick={() => onSelect("Projects")}
        />
        <LeftNavItem
          icon={<BookOpenIcon />}
          label="Online Courses"
          selected={selectedPage === "Online Courses"}
          onClick={() => onSelect("Online Courses")}
        />
      </LeftNavSection>
      

      {/* Pages */}
      <LeftNavSection label="Pages">
        <LeftNavGroup icon={<UserIcon />} label="User Profile" defaultOpen>
          <LeftNavItem label="Overview" />
          <LeftNavItem label="Projects" />
          <LeftNavItem label="Campaigns" />
          <LeftNavItem label="Documents" />
          <LeftNavItem label="Followers" />
        </LeftNavGroup>

        <LeftNavGroup icon={<Cog6ToothIcon />} label="Account">
          <LeftNavItem label="General" />
          <LeftNavItem label="Security" />
        </LeftNavGroup>

        <LeftNavGroup icon={<BuildingOfficeIcon />} label="Corporate">
          <LeftNavItem label="Teams" />
          <LeftNavItem label="Directory" />
        </LeftNavGroup>

        <LeftNavGroup icon={<NewspaperIcon />} label="Blog">
          <LeftNavItem label="Posts" />
          <LeftNavItem label="New Post" />
        </LeftNavGroup>

        <LeftNavGroup icon={<ChatBubbleLeftEllipsisIcon />} label="Social">
          <LeftNavItem label="Feed" />
          <LeftNavItem label="Messages" />
        </LeftNavGroup>
      </LeftNavSection>
    </nav>
  );
};
export default LeftSidebar;

