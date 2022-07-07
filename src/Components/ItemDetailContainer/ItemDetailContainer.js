import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../styles.css";
import products from "../FakeApi";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemDetailContainer = () =>{
    const [productOne, setProductOne] = useState({})
    const [loading, Setloading] = useState(true)

    const { id } = useParams();

    const getItem = new Promise((res, rej) => {
        const productFound = products.find(
            (prod) => prod.id === Number(id));
            
        setTimeout(() => {
            res(productFound);
        }, 1000);
    })
    console.log(productOne);
    
    useEffect(() => {
        Setloading(true);
        getItem.then((res) =>{setProductOne(res);})
        getItem.catch((error) =>{console.log(error);})
        getItem.finally(()=>Setloading(false))
    }, [id])

    return (
        <div className='container'>
            {loading ? <div className="loading"><BarLoader color="#2B93EC" height={10} width={200}/></div>  : <ItemDetail product={productOne}/>}
        </div>
    )
}
export default ItemDetailContainer