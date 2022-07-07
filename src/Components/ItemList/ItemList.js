import React from "react";
import Item from "../Item/Item";

const ItemList = ({productList}) => { 
    
    return(
        <div className='containerList'>
            {productList.map((product) =><Item key={product.id}product={product}/>)}
        </div>
    )
}

export default ItemList