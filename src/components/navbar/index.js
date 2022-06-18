import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { DiScala } from "react-icons/di"
import { Link } from "gatsby"
import "./navbar.css"
import { IconContext } from "react-icons/lib"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [navbar, setNavbar] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", changeNav)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar-container">
            <Link className="nav-logo" to="/">
              <DiScala className="nav-icon" />
              kINGS-ADVENTURE
            </Link>
            {/* for the mobile icon */}
            <div className="mobile-icon" onClick={handleClick}>
              {click ? (
                <FaTimes className="fa-times" />
              ) : (
                <FaBars className="fa-bars" />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/images"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Images
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/destinations"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Destinations
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
