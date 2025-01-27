import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Services", href: "/development", current: false },
  { name: "ContactUs", href: "/contactus", current: false },
  { name: "Login", href: "/login", current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900 fixed top-0 left-0 w-full z-50 shadow-md ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo and Company Name */}
          <div  className="flex items-center">
          <a href="/" className="text-white hover:text-violet-600 font-bold px-2">
                                  ICB
          </a>
            <img
              alt="Your Company Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-1 items-center justify-center sm:justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right-side Buttons */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification Button */}
            

     
              {/* Profile dropdown */}
                      </div>
        </div>
      </div>
    </Disclosure>
  );
}
