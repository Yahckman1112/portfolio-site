import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";


import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Example({ props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Service",
      path: "#services",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <div>
      <div className="nav-all">
        <div className={styles.header}>
          <div className={styles.nav_title}>Yahck~Man</div>
          <div className={styles.nav_item}>
            {navData.map((item, i) => (
              <a href={item.path} className={styles.nav_link} key={i}>
                {" "}
                {item.name}{" "}
              </a>
            ))}
          </div>

          <AiOutlineMenuUnfold
            className={`${styles.nav_icon} `}
            size={40}
            onClick={toggleDrawer}
            style={{ color: "white" }}
          />
        </div>

        <div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className={styles.drawer}
          >
            {navData.map((item) => (
              <div className={styles.response_link}>
                <a onClick={toggleDrawer} href={item.path}>
                  {item.name}
                </a>
              </div>
            ))}
          </Drawer>
        </div>
      
      </div>
    </div>
  );
}

export default Example;
