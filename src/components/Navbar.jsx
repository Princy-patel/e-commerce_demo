"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "Categories",
    href: "/categories",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  console.log("params", pathname);
  const cartDataSelector = useSelector((state) => state.productData.cartData);

  const totalItems = cartDataSelector.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="w-auto h-6 sm:h-7"
                src="https://plus.unsplash.com/premium_photo-1677995700883-30df169c7517?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {menu.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="my-2 text-gray-700 transition-colors duration-300 transform md:mx-4 md:my-0 hover:text-[#14b8a6]"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Cart Icon */}
            <div className="flex justify-between gap-4">
              <Link
                className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 p-3 bg-[#f1f5f9] rounded-md"
                href="/"
              >
                <FaSearch size={20} />
              </Link>
              <Link
                className="relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 p-3 bg-[#f1f5f9] rounded-md"
                href="/"
              >
                <MdAccountCircle size={20} />
              </Link>
              <Link
                className={`relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 p-3 ${
                  pathname === "/cart"
                    ? "bg-[#14b8a6] text-white"
                    : "bg-[#f1f5f9]"
                } rounded-md`}
                href="/cart"
              >
                <FaCartArrowDown size={20} />
                {totalItems > 0 && (
                  <span
                    className={`absolute top-[-6px] left-[-12px] p-1 px-2 text-xs rounded-full ${
                      pathname === "/cart"
                        ? "bg-[#f1f5f9] text-[#14b8a6] font-semibold"
                        : "text-white bg-[#14b8a6]"
                    }`}
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
