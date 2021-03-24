import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiCampingTent } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import { IconContext } from "react-icons/lib";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#6f6f6f" }}>
      <>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              className="navbar-logo"
              to="/portfolio/"
              onClick={closeMobileMenu}
            >
              <GiCampingTent className="navbar-icon" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/portfolio/skills"
                  onClick={closeMobileMenu}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/portfolio/sertificates"
                  onClick={closeMobileMenu}
                >
                  Sertificates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/portfolio/projects"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-links"
                  to="/portfolio/samples"
                  onClick={closeMobileMenu}
                >
                  Samples
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links nav-links--github"
                  href="https://github.com/mbanakova"
                  target="_blank"
                  aria-label="github"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </IconContext.Provider>
  );
}

export default Navbar;
