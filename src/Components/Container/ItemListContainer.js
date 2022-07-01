import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../styles.css";
import paleta1 from '../../assets/paleta1.jpg';
import paleta2 from '../../assets/paleta2.jpg';
import paleta3 from '../../assets/paleta3.jpg';
import paleta4 from '../../assets/paleta4.jpg';

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemListContainer = ({title}) =>{
    const [productList, setProductList] = useState([])


    const products = [
        {id: '01', price:'37.999', title:'KOMBAT IA-63 PAMPA', description: ' La Kombat IA-63 PAMPA es una pala profesional pensada para grandes luchadores que buscan la máxima potencia en la pista', pictureUrl: paleta1},
        {id: '02', price:'37.999', title:'KOMBAT BLACK 18K', description: 'La nueva Kombat Black Edition 18K es una pala de gama alta con formato diamante que se convertirá en tu mejor aliada para el Kombate', pictureUrl: paleta2},
        {id: '03', price:'37.999', title:'KOMBAT DELTA FORCE 18K', description: 'Nuestra nueva Delta Force cuenta con un balance centrado para mejorar el manejo de la pala en pista, un tubular 100% de carbono.', pictureUrl: paleta3},
        {id: '04', price:'37.999', title:'KOMBAT APACHE ICE 18K', description: 'La nueva Kombat Apache te aportará mucha salida de bola por lo que el control se lo tendrás que dar tú. Pala ideal para jugador avanzado', pictureUrl: paleta4},
    ];

    const getData = new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 2000);
    })

    useEffect(() => {
        getData.then((res) =>setProductList(res))
    }, [])

    return (
        <div class='container'>
            <h1 class="title">{title}</h1>
            <ItemList productList={productList}/>
        </div>
    )
}

export default ItemListContainer