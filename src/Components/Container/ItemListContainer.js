import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../styles.css";
import { BarLoader } from "react-spinners";
import products from "../FakeApi";
import { useParams } from "react-router-dom";

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemListContainer = ({title}) =>{
    const [productList, setProductList] = useState([])
    const [loading, Setloading] = useState(true)

    const { categoryId } = useParams();

    const getData = new Promise((res, rej) => {
        const filteredProducts = products.filter(
            (product) => product.category === categoryId
        );
        setTimeout(() => {
            categoryId
            ?res(filteredProducts)
            :res(products)
        }, 1000);
    })

    useEffect(() => {
        Setloading(true);
        getData.then((res) =>setProductList(res))
        getData.catch((err) =>console.log(err))
        getData.finally(()=>Setloading(false))
    }, [categoryId])

    return (
        <div className='container'>
            <h1 className="title">{title}</h1>
            {loading ? <div className="loading"><BarLoader color="#2B93EC" height={10} width={200}/></div>  : <ItemList productList={productList}/>}
        </div>
    )
}

export default ItemListContainer