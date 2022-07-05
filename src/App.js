//importacion(en algunos casos)
import React from "react";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"

// funcion (el nombre siempre empieza con mayuscula)
const App = () =>{
  return (
    <div>
      <NavBar />
      <ItemListContainer title="TIENDA DE PADEL"/>
      <ItemDetailContainer />
    </div>
  )
}

//Es necesario exportar la funcion siempre. 
export default App;
