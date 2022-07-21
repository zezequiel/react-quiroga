import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../styles.css";
import { useParams } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const ItemDetailContainer = () =>{
    const [productOne, setProductOne] = useState({})
    const [loading, Setloading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection,id)
        getDoc(refDoc).then(result => {
            setProductOne({
                id: result.id,
                ...result.data(),
            })
        })
        // Setloading(true);
        .catch((error) =>{console.log(error);})
        .finally(()=>Setloading(false))
    }, [id])

    return (
        <div className='container'>
            {loading ? <div className="loading"><BarLoader color="#2B93EC" height={10} width={200}/></div>  : <ItemDetail product={productOne}/>}
        </div>
    )
}
export default ItemDetailContainer