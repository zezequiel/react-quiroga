import React from "react";
import "../styles.css"

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemListContainer = ({title}) =>{
    return (
        <div>
            <h1 class="title">{title}</h1>
        </div>
    )
}

export default ItemListContainer