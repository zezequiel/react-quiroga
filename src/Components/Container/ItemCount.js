import React, { useState } from "react";
import "../styles.css"

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemCount = ({ stock, initial, onAdd}) =>{

    //Estado
    const [counter, setCounter] = useState(initial);

    const handlerclickAdd = () =>{
        if(stock > 0 && counter < stock){
            setCounter(counter + 1);
        }
    }
    const handlerclicksubtract = () =>{
        if(counter < 1){
            setCounter(counter);
        }
        else if(counter > 1){
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div class="containerCounter">
                <button onClick={handlerclickAdd}>+</button>
                <input class="inputCounter" type="text" value={counter}/>
                <button onClick={handlerclicksubtract}>-</button>
                <button onClick={()=>onAdd(counter, stock)}>Agregar al carrito</button>
            </div>
        </>
        
    )
}

export default ItemCount