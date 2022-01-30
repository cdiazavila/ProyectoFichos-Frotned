import { Fragment } from "react";

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer-fondo">
                <br />
                <br />
                <hr />
                <div className="sub-footer ms-5 mt-5">
                    <h4>Soporte Tecnico</h4>
                    <h6 className="mt-4">Puede contactarnos a través de los siguientes medios</h6>
                    <hr className="mt-4" />
                    <h6 className="mt-4"> <img src="/img/carta.jpg" className="dim-img" /> soportemoodle@correo.unicordoba.edu.co</h6>
                </div>
                <div className="sub-footer2">
                    <div className="ms-5" >
                        <br />
                        <div className="caja-imagen">
                            <a href="https://www.instagram.com/unicordoba_colombia/" title="Instagram" target={"_blank"} ><img src="/img/inst.jpg" /></a>
                            <a href="https://www.youtube.com/channel/UCujv0u79A4NYddcQVWy_qAA" title="Youtube" target={"_blank"} ><img src="/img/y.jpg" /></a>
                            <a href="https://twitter.com/Unicordoba_Col" title="twiter" target={"_blank"} ><img src="/img/t.jpg" /></a>

                            <a href="https://www.facebook.com/UnicordobaColombia/" title="facebook" target={"_blank"}><img src="/img/f.png" /></a>
                        </div>
                        <p>Soporte - Centro de Innovación en TIC para Apoyo a la Academia</p>
                        <br />

                        <hr />
                        <p>Usted no se ha identificado. (Acceder) Descargar la app para dispositivos móviles</p>

                    </div>

                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;