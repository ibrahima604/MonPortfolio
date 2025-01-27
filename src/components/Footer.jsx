import React from "react";
import "../style/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <h2 className="footer-title">Ibrahima Diallo</h2>
        <p className="footer-text">
          Étudiant en Licence 3 Mathématiques-Informatique à la Faculté des
          Sciences Semlalia de Marrakech, Maroc.
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/ibrahima604"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ibrahima-diallo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ibd8905@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/212632684091"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
