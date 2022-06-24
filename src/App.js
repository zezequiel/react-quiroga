//importacion(en algunos casos)
import React from "react";
import NavBar from "./Components/Header/NavBar";
import Title from "./Components/Container/ItemListContainer";

// funcion (el nombre siempre empieza con mayuscula)
const App = () =>{

  return (
    <div>
      <NavBar />
      <Title title="TIENDA"/>
    </div>
    

  )
}

//Es necesario exportar la funcion siempre. 
export default App;
