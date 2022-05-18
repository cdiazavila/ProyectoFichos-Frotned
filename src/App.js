import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import react,{useEffect,useState} from 'react';
import clienteAxios from './config/axios';
// importamos los componentes 
import Home from './components/Home';
import LoginEstudent from './components/LoginEstudent';
import Admin from './components/Admin';
import Contacto from './components/Contacto';
import Cafeteria from './components/Cafeteria';
import CompraFichos from './components/CompraFichos';
import HistoriaCompraEstuden from './components/HistoriaCompraEstuden';
import InformacionCompra from './components/InformacionCompra';
import RutaPrivada from './retasPrutegidas/RutaPrivada';

function App() { 
    let componente;
   const [estudent,guardarStuen]=useState([]);
   const [sede,guardarSede]=useState([]);
    let [auth,guardarAuht] =useState(false);
    //let authServi=localStorage.getItem('auth');


 


   useEffect(()=>{
             const consultarApi=()=>{
               clienteAxios.get('/estudiantes')
               .then(respuesta =>{
                 console.log(respuesta)
          
               }).catch(error =>{
                 console.log(error)
               })
             }
         consultarApi();
   },[]);


   // metodo para consultar las sedes 
     
   useEffect(()=>{
    const consultarSedes=()=>{
      clienteAxios.get('/sede')
      .then(datos =>{
        console.log(datos)
        guardarSede(datos.data);
      }).catch(error =>{
        console.log(error)
      })
    }
consultarSedes();
},[]);

// validamos las rutas privadas
if(auth===true){
  componente=<CompraFichos sede={sede}/>;
     
 }else{
 componente=<LoginEstudent/>;

  
}
  return (
    <Router>
           
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginEstudent guardarAuht={guardarAuht} auth={auth}/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Contacto />} />
       {/* <Route path="/comprafichos" element={<CompraFichos/>} />*/}
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/historial" element={<HistoriaCompraEstuden />} />
        <Route path="/informacionCompra" element={<InformacionCompra/>}/>
        <RutaPrivada exact  path="/comprafichos" element={componente} />
        
      </Routes>
    </Router>
  );
}

export default App;
