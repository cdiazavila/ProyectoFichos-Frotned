import { Fragment } from "react";
import BarraEstudiantes from "./BarraEstudiante";
import Footer from "./Footer";

const CompraFichos = () => {
    return (
        <Fragment>
            <BarraEstudiantes />
            <h3 className="ms-5 mt-5">Realice su Compra</h3>

            <div className="ms-5 col-md-3">
                <from>
                    <div className="form-floating">

                        <input type="text" name="id" id="id" placeholder="Corfirmar" className="form-control" />
                        <label for="id" >Confirmar Id</label>
                    </div>
                    <div className="form-floating">


                        <select id="sede" name="sede" className="form-control mt-4">
                            <option value="">Elige tu sede</option>

                        </select>

                    </div>
                    <div className="form-floating">
                        <select id="semestre" name="semestre" className="form-control mt-4">
                            <option value="">Elige tu semestre </option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="VI">VI</option>
                            <option value="VII">VII</option>
                            <option value="VIII">VIII</option>
                            <option value="IX">IX</option>
                            <option value="X">x</option>
                        </select>

                    </div>
                    <div className="mt-4">
                    <button type="submit" name="guardar" className="btn btn-primary">Comprar</button>
                    </div>
                </from>
            </div>
            <br />
            <Footer />
        </Fragment>

    );
}

export default CompraFichos;