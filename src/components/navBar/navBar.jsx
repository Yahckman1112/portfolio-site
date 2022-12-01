import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";
function Example({props}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="nav-all">
        <header className={styles.nav_header}>
          <div className={styles.nav_text}> Yahck~Man</div>
          <nav className={`${styles.hideOnMobile} ${styles.nav_item}`}>
            <Link className={styles.nav_link} to="/">
              Home
            </Link>
            <Link onClick={console.log('about') } className={styles.nav_link} to="/about">
              About
            </Link>
            <Link className={styles.nav_link} to="/services">
              Services
            </Link>
            <Link className={styles.nav_link} to="/">
              Work
            </Link>
            <Link className={styles.nav_link} to="/contact">
              Contact
            </Link>
          </nav>

            <div className={styles.hideOnDesktop}>

            <AiOutlineMenuUnfold className={`${styles.nav_icon} `} size={40} onClick={toggle} style={{ color: "white" }} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className= {`${styles.response_links} me-auto`} navbar >
                <NavItem>
                  <Link  to='/' className={styles.response_link} >Home</Link>
                  <Link to='/about' className={styles.response_link} >About</Link>
                  <Link to='/services' className={styles.response_link} >Services</Link>
                  <Link to='/' className={styles.response_link} >Work</Link>
                  <Link to='/' className={styles.response_link} >Contact</Link>
                </NavItem>
                
               
              </Nav>
            </Collapse>
            </div>
        
        </header>
      </div>
    </div>
  );
}

export default Example;

