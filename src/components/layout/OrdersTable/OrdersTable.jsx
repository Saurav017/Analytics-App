import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";

const ordersData = [
    {
      id: "#CM9801",
      user: "Natali Craig",
      avatar: "https://i.pravatar.cc/40?img=1",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      id: "#CM9802",
      user: "Kate Morrison",
      avatar: "https://i.pravatar.cc/40?img=2",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      id: "#CM9803",
      user: "Drew Cano",
      avatar: "https://i.pravatar.cc/40?img=3",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      id: "#CM9804",
      user: "Orlando Diggs",
      avatar: "https://i.pravatar.cc/40?img=4",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9805",
      user: "Andi Lane",
      avatar: "https://i.pravatar.cc/40?img=5",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
    {
      id: "#CM9806",
      user: "Cody Fisher",
      avatar: "https://i.pravatar.cc/40?img=6",
      project: "Mobile App",
      address: "Elk Grove Village",
      date: "3 days ago",
      status: "Complete",
    },
    {
      id: "#CM9807",
      user: "Theresa Webb",
      avatar: "https://i.pravatar.cc/40?img=7",
      project: "Marketing Campaign",
      address: "Harrison Street Boston",
      date: "Feb 10, 2023",
      status: "Pending",
    },
    {
      id: "#CM9808",
      user: "Jacob Jones",
      avatar: "https://i.pravatar.cc/40?img=8",
      project: "E-Commerce Platform",
      address: "Willow Drive New York",
      date: "Last week",
      status: "In Progress",
    },
    {
      id: "#CM9809",
      user: "Courtney Henry",
      avatar: "https://i.pravatar.cc/40?img=9",
      project: "SaaS Dashboard",
      address: "Lombard Street Chicago",
      date: "2 weeks ago",
      status: "Approved",
    },
    {
      id: "#CM9810",
      user: "Leslie Alexander",
      avatar: "https://i.pravatar.cc/40?img=10",
      project: "Portfolio Website",
      address: "Greenwich Ave Houston",
      date: "Jan 20, 2023",
      status: "Rejected",
    },
    {
      id: "#CM9811",
      user: "Jenny Wilson",
      avatar: "https://i.pravatar.cc/40?img=11",
      project: "CMS Redesign",
      address: "Sunset Blvd LA",
      date: "4 hours ago",
      status: "In Progress",
    },
    {
      id: "#CM9812",
      user: "Kristin Watson",
      avatar: "https://i.pravatar.cc/40?img=12",
      project: "API Integration",
      address: "Pine Street Dallas",
      date: "5 days ago",
      status: "Complete",
    },
    {
      id: "#CM9813",
      user: "Cameron Williamson",
      avatar: "https://i.pravatar.cc/40?img=13",
      project: "Onboarding Flow",
      address: "Bay Area San Jose",
      date: "Yesterday",
      status: "Approved",
    },
    {
      id: "#CM9814",
      user: "Esther Howard",
      avatar: "https://i.pravatar.cc/40?img=14",
      project: "Support Portal",
      address: "King Street Seattle",
      date: "2 hours ago",
      status: "Pending",
    },
    {
      id: "#CM9815",
      user: "Guy Hawkins",
      avatar: "https://i.pravatar.cc/40?img=15",
      project: "HRMS Tool",
      address: "Maple Avenue Denver",
      date: "Jan 5, 2023",
      status: "Rejected",
    },
  ];
  

const statusColors = {
  "In Progress": "text-blue-500",
  Complete: "text-green-500",
  Pending: "text-yellow-500",
  Approved: "text-amber-500",
  Rejected: "text-gray-400",
};

const OrdersTable = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    // Filter data by search
    const filteredOrders = ordersData.filter((order) =>
      order.user.toLowerCase().includes(search.toLowerCase())
    );
  
    // Pagination
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentOrders = filteredOrders.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  
    return (
      <div className="p-6 rounded-xl shadow bg-white dark:bg-[#0f0f11]">
      {/* Header actions */}
      <div className="flex flex-col mb-4 gap-3">
        <h2 className="text-xl font-semibold pb-4 text-gray-900 dark:text-[#f4f4f5]">
          Order List
        </h2>
        <div className="flex w-full justify-between items-center gap-2">
          {/* Action buttons */}
          <div>
            <button className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-[#1f1f23] hover:dark:bg-[#27272a]">
              <PlusIcon className="h-5 w-5 text-gray-700 dark:text-[#a1a1aa]" />
            </button>
            <button className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-[#1f1f23] hover:dark:bg-[#27272a]">
              <FunnelIcon className="h-5 w-5 text-gray-700 dark:text-[#a1a1aa]" />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-[#1f1f23] hover:dark:bg-[#27272a]">
              <ArrowsUpDownIcon className="h-5 w-5 text-gray-700 dark:text-[#a1a1aa]" />
            </button>
          </div>
    
          {/* Search */}
          <div className="flex items-center w-full md:w-64 bg-gray-100 dark:bg-[#1f1f23] rounded-lg px-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 dark:text-[#a1a1aa]" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-transparent px-2 py-2 outline-none text-sm text-gray-700 dark:text-[#f4f4f5]"
            />
          </div>
        </div>
      </div>
    
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-[#3f3f46] text-gray-700 dark:text-[#a1a1aa]">
              <th className="p-3">Order ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Project</th>
              <th className="p-3">Address</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b text-xs border-gray-100 dark:border-[#1f1f23] hover:bg-gray-50 dark:hover:bg-[#27272a]"
              >
                <td className="p-3 font-medium text-gray-800 dark:text-[#f4f4f5]">{order.id}</td>
                <td className="p-3 flex items-center gap-2 text-gray-800 dark:text-[#f4f4f5]">
                  <img
                    src={order.avatar}
                    alt={order.user}
                    className="h-8 w-8 rounded-full"
                  />
                  {order.user}
                </td>
                <td className="p-3 text-gray-700 dark:text-[#a1a1aa]">{order.project}</td>
                <td className="p-3 text-gray-700 dark:text-[#a1a1aa]">{order.address}</td>
                <td className="p-3 text-gray-700 dark:text-[#a1a1aa]">{order.date}</td>
                <td className={`p-3 font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        {/* Left Arrow */}
        <button
          className="px-3 py-1 rounded text-gray-500 cursor-pointer "
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
    
        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white dark:bg-[#1f1f23] dark:text-[#a1a1aa]"
                : " text-gray-300  hover:dark:bg-[#27272a]"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
    
        {/* Right Arrow */}
        <button
          className="px-3 py-1 rounded text-gray-500 cursor-pointer "
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
    
    );
  };
  
  export default OrdersTable;