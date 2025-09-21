// layout/AppShell.jsx
import React, {useState} from "react";
import TopNav from "./components/layout/TopNav";
import LeftSidebar from "./components/layout/LeftSideBar/LeftSideBar";
import RightSidebar from "./components/layout/RightSideBar/RightSidebar";
import Dashboard from "./components/layout/Dashboard/Dashboard";
import OrdersTable from "./components/layout/OrdersTable/OrdersTable";

const LEFT_W = "w-[264px]";
const RIGHT_W = "w-[300px]";

const AppShell = () => {

  const [selectedPage, setSelectedPage] = useState("Default"); // default

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex">
      <div
        className={`grid grid-cols-[264px_1fr_300px] w-full max-w-full min-h-screen`}
      >
        {/* Left Sidebar */}
        <div className={`${LEFT_W} border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black`}>
          <LeftSidebar selectedPage={selectedPage} onSelect={setSelectedPage} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-w-0">
         
          <TopNav />
          <div className="border-b border-gray-200 dark:border-gray-700" />

          {/* Main container */}
          <div className="flex-1 px-4 md:px-6 py-6 dark:bg-[#0f0f11]">
          {selectedPage === "Default" && <OrdersTable />}
          {selectedPage === "eCommerce" && <Dashboard />}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={`${RIGHT_W} border-l border-gray-200 dark:border-gray-700 bg-white dark:bg-black`}>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default AppShell;
