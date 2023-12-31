import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilBars } from "@iconscout/react-unicons";
import {
  UilEstate,
  UilPackage,
  UilClipboardAlt,
} from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard (Admin)",
  },
  {
    icon: UilClipboardAlt,
    heading: "Stock Availability (Customer)",
  },
  {
    icon: UilPackage,
    heading: "Pending Features...",
  },
];

const Sidebar = ({ selected, setSelected, expanded, setExpaned }) => {
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
