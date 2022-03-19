import { Fragment } from "react";
import BarraPrincipl from "./BarraPrincipl";
import Menu from "./Menu";
import Footer from "./Footer";
const LoginEstudent = () => {
    return (
        <Fragment>
            <BarraPrincipl />
            <nav className="nav-fondo">
                <form className="ele-form">
                    <div className="input-user">
                        <input placeholder="Usuario" className="form-control" />
                    </div>
                    <div className="input-pass">
                        <input placeholder="Passwerd" className="form-control" />
                    </div>
                    <div className="btn-acceder">
                       <button className="btn btn-primary">Acceder</button>
                    </div>

                </form>
            </nav>
            
            <Menu/>
            <Footer/>

        </Fragment>

    );
}

export default LoginEstudent;