
import {Navigate, Route } from "react-router-dom";



/*  version 1  
const RutaPrivada = (props) => {
    return ( <Route  exact={props.exact} path={props.path} element={props.element}/> );
}*/


  const RutaPrivada = (props) => {

  
    return ( <Route {...props}/> );
   /* return  <Route exact={exact}  path={path}> {auth? <Element/>: <Navigate to="/login"/>}</Route>;*/
} 



    

export default RutaPrivada;