import React from "react";
import logo from "../../assets/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import "./NavBar.css"

const NavBar = () =>{
    return (
        <header>
            <img src={logo} alt="" />
            <h1>Tienda online</h1>
            <nav>
                <a href="">Productos</a>
                <a href="">Ofertas</a>
                <a href="">Nosotros</a>
            </nav>
            <div>
                <PersonIcon color="primary"  sx={{ fontSize: 40 }}/>
                <ShoppingCartIcon color="primary"  sx={{ fontSize: 40 }} />
            </div>
        </header>
    )
}

export default NavBar