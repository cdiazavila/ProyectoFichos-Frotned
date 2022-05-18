import { Fragment,useState  } from "react";
import BarraPrincipl from "./BarraPrincipl";
import Menu from "./Menu";
import Footer from "./Footer";
import clienteAxios from "../config/axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginEstudent = (props) => {
    const navigate= useNavigate();
    const [credenciales,guardarCredenciales]=useState({
        usuario:'',
        pass:''
    });

    // leemos los datos del formulario 
    const actualizarState=e=>{
        guardarCredenciales({
            ...credenciales,
            [e.target.name] : e.target.value

        })
    }

     // Enviar una petición a la API
     const validarCredenciales = e => {
        e.preventDefault();
            
        // validadamos los campos 
        if(credenciales.usuario==='' || credenciales.pass===''){
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text:'Los Campos son Obligatorios'
              })
        }else{
             // enviar la petición por axios
        clienteAxios.post('/login', credenciales)
            .then(respuesta => {
              const ok= respuesta.data.ok;
       
               
                if(ok){
                     // Redireccionar
                   props.guardarAuht(ok);
                     
                    navigate('/comprafichos', {replace:true});
                }else{
                    props.guardarAuht(ok);
                   
                    navigate('/login', {replace:false});
                    const mesaje=respuesta.data.msg;
                    Swal.fire({
                        icon: 'error',
                        title: 'ERROR',
                        text:mesaje
                      })
                  
                }
                 console.log(props.auth)

           
            }) 
                
        }

      
    }

  
    return (
        <Fragment>
            <BarraPrincipl />
            <nav className="nav-fondo">
                <form 
                   onSubmit={validarCredenciales}
                className="ele-form"
              
                >
                    <div className="input-user">
                        <input
                        type="text"
                        placeholder="Usuario" 
                        className="form-control" 
                        id="usuario"
                        name="usuario"
                        onChange={actualizarState}
                        />
                    </div>
                    <div className="input-pass">
                        <input 
                        type="password"
                        placeholder="Passwerd" 
                        className="form-control"
                        id="pass"
                        name="pass"
                        onChange={actualizarState}
                        />
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