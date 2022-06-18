import React from "react"
import { Link } from "gatsby"
import { DiScala } from "react-icons/di"
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="socialwrap">
          <Link to="/" className="sociallogo">
            <DiScala className="socialicon" />
            kINGS-ADVENTURE
          </Link>
          <small className="websiteright">
            kINGS-ADVENTURE
            <FaCopyright /> {new Date().getFullYear()}
          </small>
          <div className="socialicons">
            <a
              className="sociallink"
              href="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className="sociallink"
              href="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="sociallink"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className="sociallink"
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
