import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginEstudent from './components/LoginEstudent';
import Admin from './components/Admin';
import Contacto from './components/Contacto';
import Cafeteria from './components/Cafeteria';
import CompraFichos from './components/CompraFichos';
import HistoriaCompraEstuden from './components/HistoriaCompraEstuden';
import InformacionCompra from './components/InformacionCompra';

function App() {
  return (
    <Router>
           
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEstudent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/comprafichos" element={<CompraFichos/>} />
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/historial" element={<HistoriaCompraEstuden />} />
        <Route path="/informacionCompra" element={<InformacionCompra/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
