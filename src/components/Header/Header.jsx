import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import { contact, menus } from "../../utils/data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 p-2 sm:py-3 sm:px-10 text-2xl z-50 backdrop-blur-sm bg-gray-800/25">
      <div className="w-full grid grid-cols-6">
        <div className="col-span-1" />
        <div className="w-full justify-center flex items-center col-span-4">
          <h1 className="font-bold text-5xl">B</h1>
        </div>
        <div className="hidden sm:flex gap-4 col-span-1 justify-center items-center">
          {contact.map((item, i) => (
            <div key={i} className="text-white flex flex-row gap-4 text-2xl">
              <item.icon />
            </div>
          ))}
        </div>

        {/* Hamburger menu */}
        <div className="sm:hidden col-span-1 flex justify-center">
          <button className="hover:animate-rotate-90-cw" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Menu List */}
      {isMenuOpen && (
        <div className="absolute top-16 h-screen left-72 w-9/12 bg-gray-800 rounded-3xl text-lg text-white p-4 flex flex-col gap-4 animate-fade-left animate-duration-400">
          
            {menus.map((item, i) => (
              <div
                key={i}
                className="flex items-center p-2 border-b border-gray-700 px-5 "
              >
                <Link to={item.link}>
                  <h1>{item.title}</h1>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Header;
