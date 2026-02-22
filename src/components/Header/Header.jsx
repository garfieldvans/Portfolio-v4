import React, { useState } from "react";
import "../Header/header.css";
import { contact } from "../../utils/data";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="sticky top-0 p-2 sm:py-3 sm:px-10 text-2xl z-50 backdrop-blur-sm bg-gray-800/25">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className={`logo-wrapper`}>
          <h1>B</h1>
        </div>
        {/* social list */}
        {contact.length > 0 && (
          <div className={`social-list-wrapper`}>
            {contact.map((item, i) => {
              return (
                <Link to={item.link} key={i}>
                  <item.icon size={30} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
