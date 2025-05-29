"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const pathname = window.location.pathname;

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutUs" },
    { name: "Products", link: "/allProduct" },
    { name: "Contact Us", link: "/contactUs" },
    {
      name: "Management",
      children: [
        { name: "Product Management", link: "/management/productManagement" },
        { name: "Add Product", link: "/management/addProduct" },
        { name: "Users", link: "/management/users" },
        { name: "Order History", link: "/management/orderHistory" },
      ],
    },
  ];

  return (
    <div className="sticky top-0 z-[999] w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-md font-poppins">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <img src="/images/GearSprintLogo.png" alt="Logo" className="h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`fixed top-0 left-0 z-[999] w-[70%] lg:w-auto h-full lg:h-auto lg:static bg-slate-900 lg:bg-transparent text-white transform duration-300 lg:transform-none transition-all overflow-y-auto lg:overflow-visible ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex lg:hidden justify-between items-center px-6 py-4 border-b border-slate-700">
            <span className="text-xl font-semibold">Gear-Sprint</span>
            <button onClick={toggleMenu} className="text-2xl text-white">
              <IoMdClose />
            </button>
          </div>
          <ul className="lg:flex gap-6 px-6 pt-4 lg:px-0 lg:pt-0">
            {Links.map((item, index) => {
              const isActiveParent =
                item.link === pathname ||
                (item.children &&
                  item.children.some((child) =>
                    pathname.startsWith(child.link)
                  ));

              return (
                <li key={index} className="relative group py-2 lg:py-0">
                  {item.children ? (
                    <>
                      <button
                        className={`text-base font-medium transition duration-300 hover:text-amber-300 ${
                          isActiveParent ? "text-amber-400" : ""
                        }`}
                      >
                        {item.name}
                      </button>
                      {/* Dropdown */}
                      <ul className="absolute hidden group-hover:block bg-white text-slate-800 shadow-lg rounded-md mt-2 min-w-[180px] z-50">
                        {item.children.map((child, idx) => (
                          <li key={idx}>
                            <Link
                              to={child.link}
                              onClick={toggleMenu}
                              className={`block px-4 py-2 text-sm hover:bg-slate-100 transition ${
                                pathname === child.link
                                  ? "text-teal-600 font-medium bg-slate-100"
                                  : ""
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      onClick={toggleMenu}
                      className={`text-base font-medium transition duration-300 hover:text-amber-300 ${
                        pathname === item.link ? "text-amber-400" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-xl rounded-full p-2 transition border-2 ${
                isActive
                  ? "bg-white text-teal-800 border-white"
                  : "text-white border-white hover:bg-white hover:text-teal-800"
              }`
            }
          >
            <IoCartOutline />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-white hover:text-amber-300"
          >
            <LiaBarsSolid />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
