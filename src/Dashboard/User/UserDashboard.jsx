// DashboardOverview.jsx
import React from "react";
import {
  FaUserCircle,
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaSignOutAlt,
  FaEdit,
  FaListUl,
  FaMapMarkedAlt,
} from "react-icons/fa";

/**
 * DashboardOverview
 * Theme: soft cream background #FFF6E5, warm browns, orange accents
 *
 * Drop into your app and pass real values or connect to your user/order API.
 */
const statCards = [
  {
    id: 1,
    title: "Profile Completion",
    value: 75,
    kind: "progress",
    icon: <FaUserCircle size={20} />,
  },
  {
    id: 2,
    title: "Total Orders",
    value: 5,
    kind: "number",
    icon: <FaListUl size={20} />,
  },
  {
    id: 3,
    title: "Orders in Progress",
    value: 2,
    kind: "number",
    icon: <FaBoxOpen size={20} />,
  },
  {
    id: 4,
    title: "Delivered Orders",
    value: 1,
    kind: "number",
    icon: <FaCheckCircle size={20} />,
  },
];

const User = ({ user = { name: "Ali Ahmed" } }) => {
  return (
    <div className=" second-main-bg p-3 sm:p-6 sm:px-8 min-h-[calc(100vh-65px)]">
      {/* Header */}
      <header className=" mx-auto mb-8 grid grid-cols-1  sm:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5C3B0B]">
            Dashboard
          </h1>
          <p className="text-lg text-[#7A5336] mt-2">
            Welcome back, {user.name}
          </p>
        </div>

        {/* Quick actions */}
        <section className="w-full sm:h-12 mt-1 sm:mt-0 mx-auto grid grid-cols-2 sm:flex sm:justify-end  gap-3">
          <ActionButton text="Edit Profile" icon={<FaEdit />} />
          <ActionButton text="View Orders" icon={<FaListUl />} />
        </section>
      </header>

      {/* Stats grid */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
        {statCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl p-2 px-4 sm:p-5 shadow-sm border border-[#f2d5b3] flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FFE7C6] flex items-center justify-center text-[#D86F1A] shadow">
                  {card.icon}
                </div>

                <div>
                  <div className="text-sm font-medium main-text-color">
                    {card.title}
                  </div>
                  {card.kind === "number" ? (
                    <div className="mt-2 text-2xl font-bold main-text-color">
                      {card.value}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* right side for progress / value */}
              {card.kind === "progress" ? (
                <div className="w-28 text-right">
                  <div className="text-2xl font-bold text-[#5A3E2B]">
                    {card.value}%
                  </div>
                </div>
              ) : null}
            </div>

            {/* progress bar if needed */}
            {card.kind === "progress" ? (
              <div className="mt-4">
                <div className="w-full h-3 bg-[#FFF0DE] rounded-full">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${card.value}%`,
                      background: "linear-gradient(90deg,#fd8e36,#fbbf77)",
                    }}
                  />
                </div>
                <div className="text-xs text-[#8A6F5A] mt-2">
                  Complete your profile to get special offers
                </div>
              </div>
            ) : (
              <div className="mt-4 text-sm text-[#8A6F5A]">
                {card.title === "Total Orders"
                  ? "Orders placed"
                  : card.title === "Orders in Progress"
                  ? "Orders being processed"
                  : card.title === "Delivered Orders"
                  ? "Orders delivered"
                  : ""}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Small footer summary card */}
      <div className=" mx-auto  mt-8">
        <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-[#f2d5b3]">
          <h3 className="text-lg font-semibold main-text-color mb-3">
            Quick Summary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 main-text-color">
            <div className="p-4 bg-[#FFF8EF] rounded-lg">
              <div className="text-sm">Pending Orders</div>
              <div className="font-bold text-xl">2</div>
            </div>
            <div className="p-4 bg-[#FFF8EF] rounded-lg">
              <div className="text-sm">Saved Addresses</div>
              <div className="font-bold text-xl">1</div>
            </div>
            <div className="p-4 bg-[#FFF8EF] rounded-lg">
              <div className="text-sm">Wishlist Items</div>
              <div className="font-bold text-xl">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* small reusable action button used in quick actions */
const ActionButton = ({ text, icon, variant = "solid" }) => {
  const base =
    "flex items-center gap-1 justify-center py-1 px-3 rounded-2xl font-semibold shadow-sm";
  // if (variant === "ghost") {
  //   return (
  //     <button
  //       className={`${base} bg-[#FFF6E5] border border-[#f2d5b3] text-[#5A3E2B]`}
  //     >
  //       <span className="text-[#D86F1A]">{icon}</span>
  //       {text}
  //     </button>
  //   );
  // }
  return (
    <button className={`${base} custom-button   `}>
      <span className="opacity-90 ">{icon}</span>
      {text}
    </button>
  );
};

export default User;
