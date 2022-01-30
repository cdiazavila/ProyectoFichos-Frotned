import { Fragment, React } from "react/cjs/react.production.min";
import { Link, withRouter } from 'react-router-dom';
const BarraPrincipl = () => {
  return (
    <Fragment>
      <header className="dim-header">
        <img src="/img/unicordoba_logo1.png" className="mt-3 ms-4" />
        <nav className="Barra mt-5">

          <Link to="/">Inicio</Link>
          <Link to="/login" className="ms-4">soy estudiante</Link>
          <Link to="/admin" className="ms-4">soy admin</Link>
          <Link to="/cafeteria" className="ms-4">Cafeteria</Link>
          <Link to="/contacto" className="ms-4">Contacto</Link>
        </nav>
      </header>

    </Fragment>
  );
}

export default BarraPrincipl;