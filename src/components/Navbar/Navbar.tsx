// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
// import { GiShoppingCart } from "react-icons/gi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const user = false;

//   const navItems = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500" : "hover:text-blue-500"
//           }
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/menu"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500" : "hover:text-blue-500"
//           }
//         >
//           Our Menu
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/shop/dessert"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500" : "hover:text-blue-500"
//           }
//         >
//           Our Shop
//         </NavLink>
//       </li>
//       <li className="relative group">
//         <NavLink
//           to="/parent"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500" : "hover:text-blue-500"
//           }
//         >
//           Parent
//         </NavLink>
//         <ul className="absolute left-0 hidden bg-white shadow-md p-2 group-hover:block">
//           <li>
//             <NavLink
//               to="/submenu1"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block px-4 py-2 text-blue-500"
//                   : "block px-4 py-2 hover:bg-gray-100"
//               }
//             >
//               Submenu 1
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/submenu2"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block px-4 py-2 text-blue-500"
//                   : "block px-4 py-2 hover:bg-gray-100"
//               }
//             >
//               Submenu 2
//             </NavLink>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive ? "text-blue-500" : "hover:text-blue-500"
//           }
//         >
//           About
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <nav className="bg-opacity-30  bg-white/0 rounded-lg backdrop-blur-lg backdrop-opacity-95 p-2 fixed z-10 max-w-6xl text-white mx-auto w-full">
//       <div className=" max-w-7xl mx-auto flex justify-between items-center px-4">
//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Logo */}
//         <NavLink to="/">
//           <img
//             className="size-18"
//             src="../../../public/images/GearSprintLogo.png"
//             alt=""
//           />
//         </NavLink>
//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex text-xl font-medium space-x-6">
//           {navItems}
//         </ul>

//         {/* Button */}
//         <div className="flex gap-2 items-center">
//           <Link to={"/dashboard/cart"}>
//             <button
//               className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
//               aria-label="Cart"
//             >
//               <GiShoppingCart className="bg-teal-700 text-4xl text-white rounded-2xl p-1" />
//             </button>
//           </Link>
//           {user ? (
//             <button className="font-medium">Sign out</button>
//           ) : (
//             <Link className="font-medium" to={"/login"}>
//               Sign up
//             </Link>
//           )}
//           <FaRegUserCircle className="text-4xl" />
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <ul className="transform transition-transform duration-300 z-50 lg:hidden bg-black shadow-md p-4 mt-2 space-y-4">
//           {navItems}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // const role = "admin";

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

  const pathname = window.location.pathname;

  return (
    <div className=" w-full sticky bg-white top-0 z-[999] font-poppins">
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-1">
        <Link to="/">
          <img className="size-24" src="/images/GearSprintLogo.png" alt="" />
        </Link>
        <div
          className={`fixed top-0 text-white bg-secondary lg:shadow-none shadow-xl shadow-primary/10 lg:bg-transparent left-0 lg:px-7 pb-7 w-[70%] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
            isMenuOpen
              ? "translate-x-0 bg-red-700 opacity-100"
              : "-translate-x-full lg:translate-x-0"
          } lg:static lg:p-0 lg:overflow-visible`}
        >
          <div className="flex lg:hidden border-b border-[#202020] justify-between items-center px-6 py-[17px]">
            <Link to="/" className="text-primary/80 text-lg hover:text-primary">
              Gear-Sprint
            </Link>
            <button
              onClick={toggleMenu}
              className="flex lg:hidden p-[6px] cursor-pointer text-white text-2xl"
            >
              <IoMdClose />
            </button>
          </div>
          <ul
            className={`list-none block bg-opacity-5 pt-4 lg:pt-0 lg:flex gap-5 ${
              isMenuOpen ? "text-white" : "text-black"
            }`}
          >
            {Links.map((item, index) => {
              // 👇 Check if the parent or any child is active
              const isActiveParent =
                item.link === pathname ||
                (item.children &&
                  item.children.some((child) =>
                    pathname.startsWith(child.link)
                  ));

              return (
                <li
                  key={index}
                  className="group relative py-2 lg:pb-4 px-6 lg:px-0"
                >
                  {item.children ? (
                    <>
                      <button
                        className={`hover:border-b-2 hover:border-amber-500 font-medium duration-300 lg:pb-[2px] ${
                          isActiveParent
                            ? "text-teal-500 font-medium"
                            : "text-black"
                        }`}
                      >
                        {item.name}
                      </button>
                      {/* Dropdown Menu */}
                      <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 min-w-[150px]">
                        {item.children.map((child, idx) => (
                          <li
                            key={idx}
                            className="border-b border-gray-100 last:border-0"
                          >
                            <Link
                              to={child.link}
                              onClick={toggleMenu}
                              className={`block px-4 py-2 ${
                                pathname === child.link
                                  ? "text-teal-500 bg-gray-100"
                                  : "text-gray-700 hover:bg-gray-100"
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
                      className={`hover:border-b-2 hover:border-amber-500 font-medium duration-300 lg:pb-[2px] ${
                        pathname === item.link
                          ? "text-teal-500 font-medium"
                          : "text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-xl rounded-full p-2 border ${
                isActive
                  ? "bg-red-700 text-white border-red-700"
                  : "text-red-700 border-red-700 hover:bg-red-700 hover:text-white"
              }`
            }
          >
            <IoCartOutline />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="flex lg:hidden text-2xl cursor-pointer text-red-700 p-[6px] font-bold"
          >
            <LiaBarsSolid />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
