// AdminDashboard.jsx
import React from "react";
import {
  FaShoppingBag,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaBoxOpen,
  FaChartLine,
  FaListUl,
  FaPlusCircle,
} from "react-icons/fa";

const statCards = [
  {
    id: 1,
    title: "Total Orders",
    value: 124,
    icon: <FaShoppingBag size={20} />,
  },
  {
    id: 2,
    title: "Pending Orders",
    value: 18,
    icon: <FaClock size={20} />,
  },
  {
    id: 3,
    title: "Delivered",
    value: 90,
    icon: <FaCheckCircle size={20} />,
  },
  {
    id: 4,
    title: "Cancelled",
    value: 16,
    icon: <FaTimesCircle size={20} />,
  },
];

const AdminHome = () => {
  return (
    <div className="second-main-bg p-3 sm:p-6 sm:px-8 min-h-[calc(100vh-65px)]">
      {/* Header */}
      <header className="mx-auto mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5C3B0B]">
            Admin Dashboard
          </h1>
          <p className="text-lg text-[#7A5336] mt-2">
            Manage store activity & performance
          </p>
        </div>

        {/* Quick Actions */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex gap-3 mt-4 sm:mt-0">
          <ActionButton text="Add Product" icon={<FaPlusCircle />} />
          <ActionButton text="View Orders" icon={<FaListUl />} />
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {statCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#f2d5b3]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFE7C6] flex items-center justify-center text-[#D86F1A] shadow">
                {card.icon}
              </div>

              <div>
                <div className="text-sm main-text-color">{card.title}</div>
                <div className="text-2xl font-bold main-text-color mt-1">
                  {card.value}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue + Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {/* Graph Placeholder */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#f2d5b3] col-span-2">
          <h3 className="text-lg font-semibold main-text-color mb-3">
            Total Revenue
          </h3>
          <div className="h-48 flex items-center justify-center text-[#7A5336]">
            <FaChartLine size={45} className="opacity-50" />
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#f2d5b3]">
          <h3 className="text-lg font-semibold main-text-color mb-3">
            Total Earnings
          </h3>
          <div className="text-3xl font-extrabold text-[#5A3E2B]">
            Rs. 54,300
          </div>
          <p className="text-sm text-[#8A6F5A] mt-2">This Week</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 mt-10 shadow-sm border border-[#f2d5b3]">
        <h3 className="text-lg font-semibold main-text-color mb-4">
          Recent Orders
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left main-text-color">
            <thead>
              <tr className="bg-[#FFF8EF] text-sm">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                { id: "#001", user: "Ali Ahmed", date: "3 May 2024", status: "Shipped" },
                { id: "#002", user: "Fatima", date: "2 May 2024", status: "Delivered" },
                { id: "#003", user: "Ahmed Khan", date: "1 May 2024", status: "Cancelled" },
              ].map((order) => (
                <tr key={order.id} className="border-b border-[#f2d5b3] text-sm">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.user}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <StatusPill status={order.status} />
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

const ActionButton = ({ text, icon }) => (
  <button className="custom-button flex items-center gap-1 py-2 px-4 rounded-2xl font-semibold shadow-sm">
    <span>{icon}</span> {text}
  </button>
);

const StatusPill = ({ status }) => {
  const colors = {
    Shipped: "bg-yellow-100 text-yellow-600",
    Delivered: "bg-green-100 text-green-600",
    Cancelled: "bg-red-100 text-red-600",
  };
  return (
    <span className={`px-3 py-1 rounded-xl text-xs font-bold ${colors[status]}`}>
      {status}
    </span>
  );
};

export default AdminHome;
