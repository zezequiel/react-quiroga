import React, {useContext} from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { context } from "../Context/CartContext";

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const CartWidget = () =>{
    const {qtyProducts} = useContext(context);

    return (
        <>
            <ShoppingCartIcon color="primary"  sx={{ fontSize: 40 }} ></ShoppingCartIcon>
            <p>{qtyProducts}</p>
        </>
    )
}

export default CartWidget