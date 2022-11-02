import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({id,name,price,quantity}) =>{

    const {deleteProd} = useContext(CartContext)

    return(
        <div className='cartItem'>
            <p>{name}</p>
            <p>U$S {price}</p>
            <p>{quantity}</p>
            <button className='btn btn-danger btn-sm' onClick={() => deleteProd(id)}>Delete</button>
        </div>
    )
    
}

export default CartItem