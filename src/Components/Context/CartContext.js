import React, { createContext, useEffect } from "react"
import { useState } from "react";

export const context  = createContext()
const { Provider } = context;

const CartContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () =>{
        let qty = 0;
        products.forEach(product => qty += product.qty);
        setQtyProducts(qty);
    }

    useEffect(() =>{
        getQtyProducts();
    }, [products])
    
    const addItem = (product) =>{
        if(isInCart(product.id)){
            const found = product.find(p=>p.id === product.id)
            const index = products.indexOf(found);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux);
        }
        else{
            setProducts([...products, product])
        }
    }

    const removeItem = (id) =>{
        setProducts(products.filter(product => product.id !== id));
    }
    
    const isInCart = (id) =>{
        return products.some(products => products.id === id)
    }

    const clear = () =>{
        setProducts([]);
    }
    
    const calculateTotal = () =>{
        let count = 0
        products.forEach((product)=> {
            count += product.qty * product.price
        })
        count = count.toFixed(3)
        return count
    }
    

    return(
            <Provider value={{products, addItem, removeItem, clear, qtyProducts, calculateTotal}}>
                {children}
            </Provider>
    )
}

export default CartContext
