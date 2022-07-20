import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../Context/CartContext"; 
const Cart = () =>{
    const { products, removeItem, calculateTotal } = useContext(context);


    if(products.length === 0){
        return <h2>El carrito esta vacio, por favor hace click <Link to="/">acá</Link></h2>
    }
    return (
        <>
            <h1 className="title">Carrito de compra</h1>
            {products.map((product) =>(
                <div>
                    <div className="productCart" key={product.id}>
                    <div>
                        <img className="imageCart" src={product.pictureUrl} alt='imagen de producto'/>
                    </div>
                    <div>
                        <h2>Producto: {product.title}</h2>
                        <h2>Precio: ${product.price}</h2>
                        <h2>Cantidad: {product.qty}</h2>
                        <button onClick={() =>removeItem(product.id)}>Eliminar producto</button>
                    </div>
                    
                </div>
                
                </div>
            ))}
            <h2>Precio total: ${calculateTotal()}</h2>
        </>
    )
}

export default Cart