//importacion(en algunos casos)
import React from "react";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";
import ItemCount from "./Components/Container/ItemCount";

// funcion (el nombre siempre empieza con mayuscula)
const App = () =>{

  const onAdd = (counter, stock) =>{
    if (stock > 0){
      alert("La cantidad de su carrito es de: "+counter)
    }else{
      alert("Este producto no tiene stock")
    }
    
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer title="TIENDA DE PADEL"/>

      
      {/* comentamos hasta que usemos itemCount */}
      {/* <ItemCount stock={5} initial={1} onAdd={onAdd}/> */}
    </div>
    

  )
}

//Es necesario exportar la funcion siempre. 
export default App;
