import React from "react";
import logo from "../../assets/logo.png"
import PersonIcon from '@mui/icons-material/Person';
import Cart from "./CartWidget";
import "../styles.css"

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const NavBar = () =>{
    return (
        <header>
            <img src={logo} alt="" />
            <nav>
                <a href="">Productos</a>
                <a href="">Categorias</a>
                <a href="">Nosotros</a>
            </nav>
            <div>
                <PersonIcon color="primary"  sx={{ fontSize: 40 }}/>
                {/* componente hijo que agregamos */}
                <Cart />
            </div>
        </header>
    )
}

export default NavBar