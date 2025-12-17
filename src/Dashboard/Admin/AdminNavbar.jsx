import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import logo from "../../asset/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus, FaSignInAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";

const AdminNavbar = () => {
  const [navigation, setNavigation] = useState([
    { name: "Dashboard", href: "/admin", current: true },
    { name: "Category", href: "/admin/category-manager", current: false },
    { name: "Add Product", href: "/admin/product-manager", current: false },
    { name: "Orders", href: "/admin/order-manager", current: false },
    // { name: "Contact", href: "#contect", current: false },
  ]);

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleOnClickActive = (index) => {
    setNavigation((prev) =>
      prev.map((item, i) => ({ ...item, current: i === index }))
    );
  };

  return (
    <Disclosure
      as="nav"
      className="sticky border-b border-[#f79854] bg-[#FFF6E5] z-1 top-0 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w px-2 sm:px-6 lg:px-4">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and hamburger */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className=" text-[#ff6900] group relative inline-flex items-center justify-center rounded-md p-2  hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-[#ff6900]">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon
                
              /> */}
              <GiHamburgerMenu
                size={24}
                aria-hidden="true"
                className="block  group-data-open:hidden "
              />
              <HiXMark
                aria-hidden="true"
                size={24}
                className="hidden  group-data-open:block"
              />
            </DisclosureButton>
          </div>
          {/* Nav link sm > */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            {/* web Logo */}
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-10 w-auto" />
            </div>
            {/* links */}
            <div className="hidden sm:w-full sm:ml-6 sm:block">
              <div className="flex space-x-4 justify-center">
                {navigation.map((item, key) => {
                  console.log(item.href[0]);
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => handleOnClickActive(key)}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "custom-button font-extrabold"
                          : "text-[#75451C]  hover:bg-white/5 hover:text-[#d75a00]",
                        "rounded-md px-2 py-2 text-md font-medium "
                      )}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item, key) => (
            <DisclosureButton
              key={item.name}
              as="a"
              onClick={() => handleOnClickActive(key)}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "custom-button"
                  : "text-[#ff6900] hover:bg-white/5 hover:text-[#d75a00]",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}

              {/* className={classNames(
                      item.current
                        ? "bg-gradient-to-r from-[#fd8e36] to-[#fbbf77] text-white"
                        : "text-[#ce6c45] hover:bg-white/5 hover:text-[#f4713d]",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )} */}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default AdminNavbar;
