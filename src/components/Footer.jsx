import React from "react";
import "../style/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer has-background-dark has-text-light" id="footer">
      <div className="container has-text-centered">
        <h2 className="title is-4 has-text-primary">Ibrahima Diallo</h2>
        <p className="subtitle is-6 has-text-grey-light">
          Étudiant en Licence 3 Mathématiques-Informatique à la Faculté des
          Sciences Semlalia de Marrakech, Maroc.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/ibrahima604"
            target="_blank"
            rel="noopener noreferrer"
            className="icon has-text-light"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ibrahima-diallo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon has-text-light"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ibd8905@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon has-text-light"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/212632684091"
            target="_blank"
            rel="noopener noreferrer"
            className="icon has-text-light"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="is-size-7 has-text-grey-dark">
          &copy; {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
