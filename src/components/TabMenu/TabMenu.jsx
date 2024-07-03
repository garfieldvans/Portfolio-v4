import React, { useState } from "react";
import { contact, menus } from "../../utils/data";
import { Link } from "react-router-dom";
import styles from "./TabMenu.module.css";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={`sm:justify-center gap-4 backdrop-blur-sm bg-gray-950/75 p-1 fixed bottom-0 left-0 right-0 ${styles.tabs}`}
    >
      {menus.map((menu, i) => (
        <div
          key={i}
          className={`${styles.tabButton} ${
            activeTab === i ? `${styles.tabButtonActive} font-bold` : ""
          } hidden text-lg sm:gap-10 sm:flex `}
          onClick={() => setActiveTab(i)}
        >
          <Link to={menu.link}>
            <h1>{menu.title}</h1>
          </Link>
        </div>
      ))}

      <div className="flex sm:hidden gap-2 pt-2">
        {contact.map((item, i) => {
          return (
            <div className="flex gap-2" key={i}>
              <Link to={item.link}>
                <item.icon size={30} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabMenu;
