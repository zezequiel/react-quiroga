import React from "react";
import "../styles.css";

const Item = ({product}) => { 
    const {title, price, description, pictureUrl} = product
    
    return(
        <div className="cardProduct">
            <div class="card">
                <img src={pictureUrl} alt='Paleta' class='imagePaleta'/>
                <div class="containerPaleta">
                    <h4><b>{title}</b></h4>
                    <p class='description'>{description}</p>
                    <p class='price'>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item