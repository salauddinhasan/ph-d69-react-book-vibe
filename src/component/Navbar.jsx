import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  
  const activeLink =
    "text-[#7E3AF2] border-2 border-[#7E3AF2] px-4 py-2 rounded-lg font-bold transition-all";
  const normalLink =
    "text-gray-600 border-2 border-transparent hover:text-[#7E3AF2] px-4 py-2 rounded-lg font-medium transition-all";

  return (
    <div className="shadow-sm bg-white">
      <div className="navbar px-4 md:px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex-none">
          <h1 className="text-2xl font-bold text-[#7E3AF2] cursor-pointer">
            Book Vibe
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-lg font-medium items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pagesToRead"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Buttons Section */}
        <div className="flex gap-3 items-center">
          <button className="px-5 py-2 rounded-lg font-semibold bg-[#7E3AF2] text-white hover:bg-[#6c2bd9] transition active:scale-95">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-lg font-semibold bg-sky-400 text-white hover:bg-sky-500 transition active:scale-95">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
