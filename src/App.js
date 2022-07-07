//importacion(en algunos casos)
import React from "react";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.js";

// funcion (el nombre siempre empieza con mayuscula)
const App = () =>{
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="TIENDA DE PADEL" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer title="TIENDA DE PADEL" />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
        
      </BrowserRouter>
  )
}
export default App;
