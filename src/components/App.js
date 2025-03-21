import '../style/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Accueil from './Accueil';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Configurer les routes ici */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="*" element={<Accueil />} />
          {/* Route pour la page de Login */}
          <Route path="/login" element={<Login />} />
          {/* Route pour la page de Signup */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
