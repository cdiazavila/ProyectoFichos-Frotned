import { Fragment } from "react";
import BarraPrincipl from "./BarraPrincipl";
import Menu from "./Menu";
import Footer from "./Footer";
const Home = () => {
    return (
        <Fragment>
            <BarraPrincipl />
            <nav className="nav-fondo">
                <h1 className="ms-3">Pagina de Inicio</h1 >
            </nav>

            <div className="mt-0">
                <img src="/img/fondo.png" className="ms-0 tama-imagen" />
            </div>

            <Menu/>
            <Footer/>
        </Fragment>

    );
}

export default Home;