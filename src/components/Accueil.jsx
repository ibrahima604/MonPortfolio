import { motion } from "framer-motion";
import imag from "../assets/Ibrahima.jpg";
import "../style/Accueil.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Competence from "./Competence";
import Projet from "./Projet";
import Services from "./Services";

function Accueil() {
  return (
    <>
      <motion.section 
        className="hero is-fullheight is-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-flex-wrap-wrap">
              {/* Texte */}
              <motion.div 
                className="column is-half has-text-centered"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="title is-2">Ibrahima Diallo</h1>
                <h2 className="subtitle is-4">Développeur Web Full-Stack</h2>
                <p className="has-text-grey-light">
                  Passionné du développement web depuis le Maroc
                </p>
                <a href="#contact-section" className="button is-danger mt-4">
                  Contactez-moi
                </a>
              </motion.div>
              
              {/* Image */}
              <motion.div 
                className="column is-half has-text-centered"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <figure className="image is-256x256 mx-auto" style={{ maxWidth: '300px' }}>
                  <img
                    src={imag}
                    alt="Ibrahima Diallo"
                    className="is-rounded"
                    style={{ boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)' }}
                  />
                </figure>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Sections avec animation au scroll */}
      {[Competence, Projet, Services, Contact].map((Component, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
          style={{ marginBottom: "50px" }}
        >
          <Component />
        </motion.div>
      ))}
      
      <Footer />
    </>
  );
}

export default Accueil;
