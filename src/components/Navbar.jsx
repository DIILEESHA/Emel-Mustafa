import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", to: "header" },
    { name: "Our Story", to: "story" },
    { name: "Details", to: "detail" },
    { name: "Gallery", to: "gallery" },
    { name: "RSVP", to: "rsvp" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="desktop-nav">
        <div className="nav-container">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <motion.button 
            className="hamburger" 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <div className={`line ${isOpen ? "line1" : ""}`}></div>
            <div className={`line ${isOpen ? "line2" : ""}`}></div>
            <div className={`line ${isOpen ? "line3" : ""}`}></div>
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    activeClass="active"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;