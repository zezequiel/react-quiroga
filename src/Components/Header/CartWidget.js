import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const Cart = () =>{
    return (
        <ShoppingCartIcon color="primary"  sx={{ fontSize: 40 }} />
    )
}

export default Cart