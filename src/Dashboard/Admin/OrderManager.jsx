import React, { useState } from "react";
import {
  FaSearch,
  FaTruck,
  FaBox,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const ordersData = [
  {
    id: "ORD-1001",
    customer: "Ali Ahmed",
    phone: "0300-1234567",
    total: 790,
    status: "Processing",
    date: "2025-01-12",
  },
  {
    id: "ORD-1002",
    customer: "Hassan",
    phone: "0321-9988776",
    total: 1200,
    status: "Pending",
    date: "2025-01-14",
  },
  {
    id: "ORD-1003",
    customer: "Sarah Khan",
    phone: "0315-5566778",
    total: 560,
    status: "Delivered",
    date: "2025-01-18",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800 border border-yellow-300",
  Processing: "bg-blue-100 text-blue-800 border border-blue-300",
  Shipped: "bg-purple-100 text-purple-800 border border-purple-300",
  Delivered: "bg-green-100 text-green-800 border border-green-300",
  Cancelled: "bg-red-100 text-red-800 border border-red-300",
};

const OrderManager = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="second-main-bg min-h-[calc(100vh-65px)] p-4 sm:p-8">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-[#5C3B0B] mb-6">
        Order Management
      </h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-white border border-[#f2d5b3] rounded-lg w-full max-w-xl p-2 mb-6 shadow-sm">
        <FaSearch className="text-[#D86F1A]" />
        <input
          type="text"
          placeholder="Search by Order ID or Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none text-[#5C3B0B]"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-[#f2d5b3] shadow-sm p-4 sm:p-6">
        <h2 className="text-xl font-semibold main-text-color mb-4">
          All Orders
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm main-text-color border-b bg-[#FFF8EF]">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Date</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {ordersData
                .filter(
                  (ord) =>
                    ord.id.toLowerCase().includes(search.toLowerCase()) ||
                    ord.customer.toLowerCase().includes(search.toLowerCase())
                )
                .map((ord) => (
                  <tr
                    key={ord.id}
                    className="border-b hover:bg-[#FFF3E0] transition"
                  >
                    <td className="p-3 font-semibold text-[#5C3B0B]">
                      {ord.id}
                    </td>
                    <td className="p-3">{ord.customer}</td>
                    <td className="p-3">{ord.phone}</td>
                    <td className="p-3">{ord.date}</td>
                    <td className="p-3 font-bold">Rs. {ord.total}</td>

                    {/* Status Badge */}
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          statusColors[ord.status]
                        }`}
                      >
                        {ord.status}
                      </span>
                    </td>

                    <td className="p-3 text-center">
                      <button className="custom-button px-4 py-1 rounded-xl">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;
