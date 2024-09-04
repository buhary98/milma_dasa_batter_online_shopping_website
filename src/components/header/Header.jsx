import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Logo from "../../assets/images/milma_logo.webp";
import classnames from "classnames";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropDownRef = useRef(null);

  /* const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setDropDownOpen(false);
  }; */

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const headerOffset = document.querySelector(".navbar").offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
    setDropDownOpen(false);
  };

  const toggleDropDown = () => {
    setDropDownOpen((prevDropDownOpen) => !prevDropDownOpen);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    setDropDownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target) &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => scrollToSection("head")}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => e.key === "Enter" && scrollToSection("head")}
      >
        <img src={Logo} alt="Milma" />
      </div>
      <div
        className="navbar-toggler"
        onClick={toggleMenu}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => e.key === "Enter" && toggleMenu()}
      >
        <span className="navbar-toggler-icon"></span>
      </div>
      <div
        ref={menuRef}
        className={classnames("navbar-collapse", { show: menuOpen })}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => scrollToSection("about")}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => e.key === "Enter" && scrollToSection("about")}
            >
              About Us
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => scrollToSection("product")}
              role="button"
              tabIndex="0"
              onKeyPress={(e) =>
                e.key === "Enter" && scrollToSection("product")
              }
            >
              Our Product
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              onClick={() => scrollToSection("review")}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => e.key === "Enter" && scrollToSection("review")}
            >
              Reviews
            </div>
          </li>
          <li className="nav-item display-none">
            <div
              className="nav-link"
              onClick={() => scrollToSection("process")}
              role="button"
              tabIndex="0"
              onKeyPress={(e) =>
                e.key === "Enter" && scrollToSection("process")
              }
            >
              Process
            </div>
          </li>
          <li className="nav-item display-none">
            <div
              className="nav-link"
              onClick={() => scrollToSection("contact")}
              role="button"
              tabIndex="0"
              onKeyPress={(e) =>
                e.key === "Enter" && scrollToSection("contact")
              }
            >
              Contact Us
            </div>
          </li>
          <li className="nav-item more-menu">
            <div
              className="nav-link"
              onClick={toggleDropDown}
              role="button"
              tabIndex="0"
              onKeyPress={(e) => e.key === "Enter" && toggleDropDown()}
            >
              More{" "}
              {dropDownOpen ? (
                <FaChevronUp className="down-icon" />
              ) : (
                <FaChevronDown className="down-icon" />
              )}
            </div>
            <div
              ref={dropDownRef}
              className={classnames("dropdown-collapse", {
                show: dropDownOpen,
              })}
            >
              <ul className="dropdown-menu">
                <li className="nav-item drop-nav-item">
                  <div
                    className="nav-link"
                    onClick={() => scrollToSection("process")}
                    role="button"
                    tabIndex="0"
                    onKeyPress={(e) =>
                      e.key === "Enter" && scrollToSection("process")
                    }
                  >
                    Process
                  </div>
                </li>
                <li className="nav-item drop-nav-item">
                  <div
                    className="nav-link"
                    onClick={() => scrollToSection("contact")}
                    role="button"
                    tabIndex="0"
                    onKeyPress={(e) =>
                      e.key === "Enter" && scrollToSection("contact")
                    }
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
