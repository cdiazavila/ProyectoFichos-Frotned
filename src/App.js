import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginEstudent from './components/LoginEstudent';
import Admin from './components/Admin'
import Contacto from './components/Contacto'
import Cafeteria from './components/Cafeteria'

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEstudent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cafeteria" element={<Cafeteria />} />
      </Routes>
    </Router>
  );
}

export default App;
