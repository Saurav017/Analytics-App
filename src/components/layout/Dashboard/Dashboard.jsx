// pages/Dashboard.jsx
import React from "react";
import StatCard from "./Cards/StatCard";
import ProjectionChart from "./Cards/ProjectionChart";
import RevenueChart from "./Cards/RevenueChart";
import LocationMap from "./Cards/LocationMap";
import ProductsTable from "./Cards/ProductsTable";
import SalesDonut from "./Cards/SalesDonut";

const Dashboard = () => {
  return (
    <>
    <h2 className="text-xl font-semibold">eCommerce</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <StatCard title="Customers" value="3,781" change="+11.01%" highlight={true}/>
        <StatCard title="Orders" value="1,219" change="-0.03%" />
        <StatCard title="Revenue" value="$695" change="+15.03%" />
        <StatCard title="Growth" value="30.1%" change="+6.08%" highlight={true} />
      </div>
      <ProjectionChart />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6"> 
          <RevenueChart />
        </div>
        <LocationMap />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
  {/* Products */}
  <div className="lg:col-span-2 h-full">
    <ProductsTable className="h-full" />
  </div>

  {/* Sales Donut */}
  <div className="h-full">
    <SalesDonut className="h-full" />
  </div>
</div>

      </>
  );
};

export default Dashboard;
