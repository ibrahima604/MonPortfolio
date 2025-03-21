import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";
import "../style/Navbar.css";
import 'bulma/css/bulma.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar is-light is-fixed-top">
      <div className="navbar-brand">
        {/* Logo */}
        <div className="navbar-item has-text-weight-bold">
          Mon<span className="has-text-danger">PortFolio</span>
        </div>
        {/* Menu burger (mobile) */}
        <div className="navbar-burger" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-end">
          {/* Liens de navigation */}
          <Link to="*" className="navbar-item" onClick={toggleMenu}>Accueil</Link>
          <a href="#competence" className="navbar-item" onClick={toggleMenu}>Compétences</a>
          <a href="#projet" className="navbar-item" onClick={toggleMenu}>Projets</a>
          <a href="#services" className="navbar-item" onClick={toggleMenu}>Services</a>
          <Link to="/login" className="navbar-item button is-danger is-light" onClick={toggleMenu}>
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
