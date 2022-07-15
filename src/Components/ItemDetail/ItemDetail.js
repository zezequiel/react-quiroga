import React, {useState, useContext} from "react";
import ItemCount from "../Container/ItemCount";
import { Link } from "react-router-dom";
import { context } from "../Context/CartContext"

const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true);
    const { addItem } = useContext(context);

    const onAdd = (counter, stock) => {
        if (stock > 0){
            alert("La cantidad de su carrito es de: "+counter)
        }else{
                alert("Este producto no tiene stock")
        }
        addItem({...product, qty: counter});
        setShow(!show);
        
        
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
                        <h1>{show}</h1>
                        {show ? <ItemCount stock={5} initial={1} onAdd={onAdd}/>  : <Link to="/cart"><button>FINALIZAR</button></Link>}
                        <hr/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail