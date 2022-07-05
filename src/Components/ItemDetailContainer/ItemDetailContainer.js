import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../styles.css";
import paleta1 from '../../assets/paleta1.jpg';

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemDetailContainer = () =>{
    const [productOne, setProductOne] = useState([])

    const product = [
        {id: '01', price:'37.999', title:'KOMBAT IA-63 PAMPA', pictureUrl: paleta1},
    ];

    const getItem = new Promise((res, rej) => {
        setTimeout(() => {
            res(product)
        }, 2000);
    })

    useEffect(() => {
        getItem.then((res) =>setProductOne(res))
    }, [])

    return (
        <div class='container'>
            {productOne.map((product) =><ItemDetail key={product.id} product={product}/>)}
        </div>
    )
}
export default ItemDetailContainer