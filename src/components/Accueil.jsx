import imag from "../assets/Ibrahima.jpg";
import "../style/Accueil.css";
function Accueil() {
  return (
    <div id="home" className="accueil">
      <div>
        <h1>Ibrahima Diallo</h1>
        <h2>Developpeur Web Full-Stack</h2>
        <p>Passioné du développement web depuis Le Maroc</p>
        <a href="#contact-section"><button className="btn">Contactez-moi</button></a>
      </div>
      <div>
        <img src={imag} alt="" />
      </div>
    </div>
  );
}
export default Accueil;
