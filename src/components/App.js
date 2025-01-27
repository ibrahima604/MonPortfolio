import '../style/App.css';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import Accueil from './Accueil';
import Competence from './Competence';
import Projet from './Projet';
import Services from './Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Competence />
      <Projet />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
