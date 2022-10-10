import React from 'react';
import Product from './product';
const Cart = props => {
    const style =!props.Product.isincart?{backgroundColor:"white" ,color:"#3399ff"}:{backgroundColor:"#3399ff",color:"white"}
    return (
        //<i style={style} onClick={() => props.onClick(props.Product)} className="fas fa-cart-plus"></i>
        <button style={style} onClick={() => props.onClick(props.Product)}>add</button>
      );
}
 
export default Cart;