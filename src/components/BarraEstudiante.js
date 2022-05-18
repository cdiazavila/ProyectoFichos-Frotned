import { Fragment } from "react/cjs/react.production.min";
import { Link} from 'react-router-dom';
const BarraEstudiantes = () => {
    return ( 

        <Fragment>
              <header className="dim-header">
        <img src="/img/unicordoba_logo1.png" className="mt-3 ms-4" />
        <nav className="Barra mt-5">

          <Link to="/comprafichos" className="ms-4">Compras</Link>
          <Link to="/historial" className="ms-4">Historial</Link>
          <Link to="/informacionCompra" className="ms-4">Lista Compras</Link>
          <Link to="/#" className="ms-4">Config</Link>
          <Link to="/login" className="ms-4">Salir</Link>
        </nav>
      </header>
        </Fragment>
     );
}
 
export default BarraEstudiantes;