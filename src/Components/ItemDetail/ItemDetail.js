import React from "react";
import ItemCount from "../Container/ItemCount";


const ItemDetail = ({ product }) => { 

    const onAdd = (counter, stock) =>{
        if (stock > 0){
          alert("La cantidad de su carrito es de: "+counter)
        }else{
          alert("Este producto no tiene stock")
        }
        
      }

    return(
        <div className="cardProductDetail">
            <div className="cardDetailOne">
                <div>
                    <img src={product.pictureUrl} alt='Paleta' className='imagePaletaDetail'/>
                </div>
            </div>
            <div>
                <div className="cardDetailTwo">
                        <p className="titleDetail"><b>{product.title}</b></p>
                        <p className='priceDetail'>${product.price}</p>
                        <hr/>
                        <p className='descriptionDetail'>{product.description}</p>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        <hr/>
                </div>    
            </div>
        </div>
        
    )
}

export default ItemDetail