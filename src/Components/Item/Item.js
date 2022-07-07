import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

const Item = ({product}) => { 
    const {id, title, price, description, pictureUrl} = product
    
    return(
        <Link to={`/detail/${id}`} text-decoration='none'>
            <div className="cardProduct">
                <div className="card">
                    <img src={pictureUrl} alt='Paleta' className='imagePaleta'/>
                    <div className="containerPaleta">
                        <h4>{title}</h4>
                        {/* <p className='description'>{description}</p> */}
                        <p className='price'>${price}</p>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}

export default Item