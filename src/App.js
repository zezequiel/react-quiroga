//importacion(en algunos casos)
import React from "react";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Container/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart.js";
import CartContext from "./Components/Context/CartContext"

// funcion (el nombre siempre empieza con mayuscula)
const App = () =>{
  return (
      <BrowserRouter>
        <CartContext>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="TIENDA DE PADEL" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer title="TIENDA DE PADEL" />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart/" element={<Cart />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
  )
}
export default App;
