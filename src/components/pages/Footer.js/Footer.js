import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdFingerprint, MdLaptopWindows } from "react-icons/md";

function Footer() {
  return (
    // <div className="footer-container">
    <section className="social-media">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            <MdLaptopWindows className="navbar-icon" />
            VLACK-CODER
          </Link>
        </div>
        <small className="website-rights"> VLACK-CODER © 2020</small>
        <div className="social-icons">
          <a
            className="social-icon-link"
            href="https://github.com/vlack-coder"
            target="_blank"
            aria-label="LinkedIn"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon-link"
            href="/https://github.com/vlack-coder"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            className="social-icon-link"
            to={
              "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
            }
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </Link>
          <Link
            className="social-icon-link"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </section>
    // </div>
  );
}

export default Footer;
