import { Fragment } from "react";
import BarraEstudiantes from "./BarraEstudiante";
import Footer from "./Footer";
const HistoriaCompraEstuden = () => {
    return (
        <Fragment>
            <BarraEstudiantes />
            <nav className="nav-fondo">
                <h1 className="ms-3">Historia De Compras</h1 >
            </nav>

            <div className="col-md-8 mt-5 historial-centro">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">SEMESTRE CURSADO</th>
                            <th scope="col">SEDE</th>
                            <th scope="col">CARRERA</th>
                            <th scope="col">FECHA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <Footer/>
        </Fragment>
    );
}

export default HistoriaCompraEstuden;