import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../style/Navbar.css"; // Importation du fichier CSS
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">Mon<span>PortFolio</span></div>
        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Accueil</a>
          </li>
         
          <li>
            <a href="#competence">Competences</a>
          </li>
          <li>
            <a href="#projet">Projets</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#footer">À propos</a>
          </li>
         
         
        </ul>
        <div className="contact">
    <a href="#contact-section" className="contact-button-link">
        <button className="contact-button">Contact</button>
    </a>
</div>
 {/* Menu burger (mobile) */}
 <div className="navbar-burger" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
