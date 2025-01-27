import React from "react";
import "../style/Projet.css";
import pizzeria from "../assets/pizzeria.png"; // Assure-toi que le chemin est correct
import or from "../assets/or.png"; // Assure-toi que le chemin est correct
import calculatrice from "../assets/calculette.jpg"; // Assure-toi que le chemin est correct
import pays from "../assets/jeu-pays.png"; // Assure-toi que le chemin est correct

const projets = [
  {
    id: 1,
    titre: "Calculatrice",
    description: "Une calculatrice simple et fonctionnelle développée en JavaScript.",
    image: calculatrice,  // Utilisation de l'image importée
    lien: "https://github.com/ibrahima604/calculette",
  },
  {
    id: 2,
    titre: "Site Web sur l'Or",
    description: "Un site informatif sur les tendances et prix de l'or.",
    image:or,  // Utilisation de l'image importée
    lien: "https://github.com/sagnofelix/kf-sarlu/tree/Diallo",
  },
  {
    id: 3,
    titre: "Gestion de Pizzeria",
    description: "Un site pour gérer les commandes et les stocks d'une pizzeria.",
    image: pizzeria,  // Utilisation de l'image importée
    lien: "https://github.com/ibrahima604/projet_pizzeria",
  },
  {
    id: 4,
    titre: "Jeu de Pays",
    description: "Un jeu interactif pour apprendre les pays et leurs capitales.",
    image: pays,  // Utilisation de l'image importée
    lien: "https://github.com/ibrahima604/jouer-des-pays",
  }
];

function Projet() {
  return (
    <div className="projets-container" id="projet">
      <h1 className="projets-title">Mes Projets</h1>
      <div className="projets-grid">
        {projets.map((projet) => (
          <div key={projet.id} className="projet-card">
            <img src={projet.image} alt={projet.titre} />
            <h2>{projet.titre}</h2>
            <p>{projet.description}</p>
            <a href={projet.lien} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projet;
