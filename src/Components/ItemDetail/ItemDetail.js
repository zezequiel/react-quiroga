import React from "react";
import ItemCount from "../Container/ItemCount";


const ItemDetail = ({product}) => { 
    
    const onAdd = (counter, stock) =>{
        if (stock > 0){
          alert("La cantidad de su carrito es de: "+counter)
        }else{
          alert("Este producto no tiene stock")
        }
        
      }

    const {title, price, pictureUrl} = product
    return(
        <div className="cardProductDetail">
            <div class="cardDetailOne">
                <div>
                    <img src={pictureUrl} alt='Paleta' class='imagePaletaDetail'/>
                </div>
            </div>
            <div>
                <div class="cardDetailTwo">
                        <p class="titleDetail"><b>{title}</b></p>
                        <p class='priceDetail'>${price}</p>
                        <hr/>
                        <p class='descriptionDetail'>¡Un arma letal! Inspirada en el avión de entrenamiento avanzado con capacidades de combate de la Fuerza Aérea Argentina. La Kombat IA-63 PAMPA es una pala profesional pensada para grandes luchadores que buscan la máxima potencia en la pista. <br/><br/>De formato diamante y balance alto, a esta pala la hemos dotado con carbono 12K y una gran salida de bola. También están de vuelta los planos rugosos con textura KOMBAT, para dotarla con control y efecto.<br/><br/> Siente la pasión de Argentina en su diseño con detalles únicos. ¡KOMBATiente! esta pala será tu aliada en la pista</p>
                        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                        <hr/>
                </div>    
            </div>
        </div>
        
    )
}

export default ItemDetail