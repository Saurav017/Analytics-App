// components/dashboard/ProductsTable.jsx
import React from "react";

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

const ProductsTable = () => {
  return (
    <div className="py-2 px-4 rounded-xl shadow bg-white dark:bg-[#1f1f23] h-[350px] flex align-left justify-center flex-col">
      <h3 className="text-lg font-semibold mb-6">Top Selling Products</h3>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            <th className="pb-2">Name</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Quantity</th>
            <th className="pb-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-2">{p.name}</td>
              <td>{p.price}</td>
              <td>{p.qty}</td>
              <td>{p.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
