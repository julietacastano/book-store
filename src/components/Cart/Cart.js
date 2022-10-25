import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () =>{
    const {cart, getQuantity, getPrice, emptyCart, deleteProd} = useContext(CartContext)
    let totalQuantity = getQuantity()
    let totalPrice = getPrice()

    console.log(cart)

    return(
        <div className="cart">
            <h4>Your Cart</h4>
            <div className='cartItemList'>
                <div className='cartItemTitle'>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Delete</p>
                </div>
                {cart.map(prod =>
                    <div className='cartItem'>
                        <p>{prod.name}</p>
                        <p>U$S {prod.price}</p>
                        <p>{prod.quantity}</p>
                        <button className='btn btn-danger btn-sm' onClick={() => deleteProd(prod.id)}>Delete</button>
                    </div>
                    )}
                <button className='btn btn-danger btn-sm btnEmpty' onClick={() => emptyCart()} >Empty cart</button>
            </div>
            <div className='totals'>
                <p>Total quantity: {totalQuantity}</p>
                <p>Total Price: U$S {totalPrice}</p>
                <button className='btn btn-success btnCheck'>Go to checkout</button>
            </div>
            
        </div>
    )
}

export default Cart; 