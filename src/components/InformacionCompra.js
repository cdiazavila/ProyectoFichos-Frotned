import { Fragment } from "react/cjs/react.production.min";
import BarraEstudiantes from "./BarraEstudiante";
import Footer from "./Footer";
const InformacionCompra = () => {
    return (
        <Fragment>
            <BarraEstudiantes />
            <nav className="nav-fondo">
                
                <h1 className="ms-3">Informacion de Compras Diarias Por Sedes</h1 >
                  
            </nav>

            <div className="input-buscar-sede col-md-1 ms-2">
                        <input placeholder="Buscar sede" className="form-control " />
                    </div>
            <div className="col-md-8 historial-centro">

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>ID</th>
                            <th>NOMBRES</th>
                            <th>APELLIDOS</th>
                            <th>CARRERA</th>
                            <th>SEDE</th>
                            <th>FECHA</th>
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
            <br />
            <Footer />
        </Fragment>
    );
}

export default InformacionCompra;