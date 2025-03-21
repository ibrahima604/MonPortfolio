import React from "react";
import "bulma/css/bulma.min.css";
import pizzeria from "../assets/pizzeria.png";
import or from "../assets/or.png";
import calculatrice from "../assets/calculette.jpg";
import pays from "../assets/jeu-pays.png";
import portfolio from "../assets/portfolio.png";
import "../style/Projet.css"



const projets = [
  {
    id: 1,
    titre: "Calculatrice",
    description: "Une calculatrice simple et fonctionnelle développée en JavaScript.",
    image: calculatrice,
    lien: "https://github.com/ibrahima604/calculette",
  },
  {
    id: 2,
    titre: "Site Web sur l'Or",
    description: "Un site informatif sur les tendances et prix de l'or.",
    image: or,
    lien: "https://github.com/sagnofelix/kf-sarlu/tree/Diallo",
  },
  {
    id: 3,
    titre: "Gestion de Pizzeria",
    description: "Un site pour gérer les commandes et les stocks d'une pizzeria.",
    image: pizzeria,
    lien: "https://github.com/ibrahima604/projet_pizzeria",
  },
  {
    id: 4,
    titre: "Jeu de Pays",
    description: "Un jeu interactif pour apprendre les pays et leurs capitales.",
    image: pays,
    lien: "https://github.com/ibrahima604/jouer-des-pays",
  },
  {
    id: 5,
    titre: "Portfolio",
    description: "Mon Portfolio.",
    image: portfolio,
    lien: "https://ibrahima604.github.io/MonPortfolio/",
  }
];

function Projet() {
  return (
    <section className="section" id="projet">
      <div className="container">
        <h1 className="title has-text-centered has-text-primary">Mes Projets</h1>
        <div className="columns is-multiline is-centered">
          {projets.map((projet) => (
            <div key={projet.id} className="column is-one-quarter">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={projet.image} alt={projet.titre} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="title is-5">{projet.titre}</h2>
                  <p className="title is-6 desc">{projet.description}</p>
                  <a 
                    href={projet.lien} 
                    className="button is-link is-light is-fullwidth mt-3"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projet;
