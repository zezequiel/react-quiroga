import React from "react";
import logo from '../../assets/logo1.png'
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "./CartWidget";
import "../styles.css"
import { Link, NavLink } from "react-router-dom";

//de esta manera le puedo pasar propiedades a mi componente
//saludar es una funcion callback que la llama el componente hijo pero se ejecuta en el padre
const NavBar = () =>{

    const categories = [
        {id: 1, path:'/category/redondas', name:'Redondas'},
        {id: 2, path:'/category/diamante', name:'Diamante'},
        {id: 3, path:'/category/lagrima', name:'Lagrima'},
    ]

    return (
        <header>
            <Link to="/" className="link"><img src={logo} alt="" /></Link>
            <div class='category'>
                {categories.map((cat) =>
                    <NavLink to={cat.path} key={cat.id} className="nav">
                        {cat.name}
                    </NavLink>)}
            </div>
            <div>
                <PersonIcon color="primary"  sx={{ fontSize: 40 }}/>
                {/* componente hijo que agregamos */}
                    
                        <Link to="/cart"><CartWidget /></Link>
            </div>
        </header>
    )
}

export default NavBar