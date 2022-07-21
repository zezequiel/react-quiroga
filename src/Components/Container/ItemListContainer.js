import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "../styles.css";
import { BarLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore";
 

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemListContainer = ({title}) =>{
    const [productList, setProductList] = useState([])
    const [loading, Setloading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        const q = categoryId
            ? query(collection(db, 'productos'), where('category', '==' , categoryId))
            : collection(db, 'productos');

        getDocs(q)
        .then(result => {
            const list = result.docs.map(product =>{
                return {
                    id: product.id,
                    ...product.data(),
                }
            })
            setProductList(list);
        })
        // Setloading(true);
        .catch((err) =>console.log(err))
        .finally(()=>Setloading(false))
    }, [categoryId])

    return (
        <div className='container'>
            <h1 className="title">{title}</h1>
            {loading ? <div className="loading"><BarLoader color="#2B93EC" height={10} width={200}/></div>  : <ItemList productList={productList}/>}
        </div>
    )
}

export default ItemListContainer