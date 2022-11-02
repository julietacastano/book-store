import './Cart.css'
import CartItem from '../CartItem/CartItem';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () =>{
    const {cart, totalQuantity, totalPrice, emptyCart} = useContext(CartContext)

    console.log(cart)

    if(totalQuantity === 0){
        return <p className='emptyCart'>Your cart is empty</p>
    } else{
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
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
                <button className='btn btn-danger btn-sm btnEmpty' onClick={() => emptyCart()} >Empty cart</button>
            </div>
            <div className='totals'>
                <p>Total quantity: {totalQuantity}</p>
                <p>Total Price: U$S {totalPrice}</p>
                <Link to={'/checkout'} className='btn btn-success btnCheck'>Go to checkout</Link>
            </div>
            
        </div>
    )}
}

export default Cart; 