import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import logo from "../asset/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus, FaSignInAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiXMark } from "react-icons/hi2";

const Navbar = ({ toggleCart }) => {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: true },
    { name: "Products", href: "/products", current: false },
    { name: "About", href: "#about", current: false },
    { name: "Contact", href: "#contect", current: false },
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
                  if (item.href[0] == "#") {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => handleOnClickActive(key)}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "custom-button"
                            : "text-[#ff6900] hover:bg-white/5 hover:text-[#d75a00]",
                          "rounded-md px-2 py-2 text-md font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    );
                  }
                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => handleOnClickActive(key)}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "custom-button"
                          : "text-[#ff6900] hover:bg-white/5 hover:text-[#d75a00]",
                        "rounded-md px-2 py-2 text-md font-medium"
                      )}
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Logo Cart and sign up */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-1 sm:static sm:inset-auto sm:ml-4 sm:pr-0">
            <NavLink
              to="signin"
              className="relative rounded-full p-1 mr-2 text-[#ff6900]"
            >
              <FaSignInAlt size={24} />
            </NavLink>

            <button
              type="button"
              className="relative rounded-full p-1 text-[#ff6900] "
            >
              <FaCartPlus size={24} onClick={toggleCart} />
            </button>

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
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

export default Navbar;
