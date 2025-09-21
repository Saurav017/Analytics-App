import React from "react";
import SidebarSection from "./SidebarSection";
import NotificationItem from "./NotificationItem";
import ActivityItem from "./ActivityItem";
import ContactItem from "./ContactItem";
import data from "./sideBarData.json";
import { iconMapper } from "../../utils/IconMapper";

const RightSidebar = () => {
  return (
    <aside className="w-72 h-screen overflow-y-auto p-4 border-l border-gray-200 dark:border-[#3f3f46] bg-white dark:bg-[#0f0f11]">
      {/* Notifications */}
      <SidebarSection title="Notifications">
        {data.notifications.map((n, idx) => {
          const Icon = iconMapper[n.icon];
          return (
            <NotificationItem
              key={idx}
              icon={<Icon className="w-5 h-5 text-gray-600 dark:text-[#a1a1aa]" />}
              text={n.text}
              time={n.time}
            />
          );
        })}
      </SidebarSection>

      {/* Activities */}
      <SidebarSection title="Activities">
        {data.activities.map((a, idx) => (
          <ActivityItem
            key={idx}
            avatar={a.avatar}
            text={a.text}
            time={a.time}
          />
        ))}
      </SidebarSection>

      {/* Contacts */}
      <SidebarSection title="Contacts">
        {data.contacts.map((c, idx) => (
          <ContactItem key={idx} avatar={c.avatar} name={c.name} />
        ))}
      </SidebarSection>
    </aside>
  );
};


export default RightSidebar;
