import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { context } from "../Context/CartContext"; 


const Cart = () =>{
    const { products, removeItem, calculateTotal, clear } = useContext(context);
    const [idSale, setIdSale] = useState ("");

    // Estados de formulario
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [direction, setDirection] = useState("");

    const arrayPerson = [{nombre: name, apellido: lastName, email: email, direccion: direction}];

    const checkout = () =>{
            const saleCollection = collection(db, 'ventas');
            addDoc(saleCollection, {
                person: arrayPerson,
                items: products,
                date: serverTimestamp(),
                total: calculateTotal()
            })
            .then((result) =>{
                setIdSale(result.id)
            })
            alert("Su compra se concreto con exito")
            clear();
        
    }

    

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
                        <button onClick={() =>removeItem(product.id)}>X</button>
                    </div>
                    
                </div>
                
                </div>
            ))}
            <h2>Precio total: ${calculateTotal()}</h2>
            
            <div className="formPurchase" onSubmit={checkout}>
                <form>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={name}
                        placeholder="Ingresa tu nombre"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />


                    <label htmlFor="apellido">Apellido</label>
                    <input
                        name="apellido"
                        value={lastName}
                        type="text"
                        placeholder="Ingresa tu apellido"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />


                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        name="email"
                        value={email}
                        type="email"
                        placeholder="ejemplo@gmail.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <label htmlFor="direccion">Direccion</label>
                    <input
                        name="direccion"
                        value={direction}
                        type="text"
                        placeholder="Ingresa tu direccion"
                        required
                        onChange={(e) => setDirection(e.target.value)}
                    />
                        <input
                            id="submit"
                            type="submit"
                            value="Finalizar Compra"
                        />
                    

                </form>
            </div>
            
        </>
    )
}

export default Cart