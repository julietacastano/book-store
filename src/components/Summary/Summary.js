import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Summary = () =>{
    const {cart, totalPrice} = useContext(CartContext);

    return(
        <div style={{margin:'50px'}}>
            <h4>Order Summary</h4>
            <div className='text-start' style={{marginLeft:'100px'}}>
                <p><ins>Your Order</ins></p>
                    {cart.map(prod=>
                    <div key={prod.id}>
                        <p>{prod.name} - quantity: {prod.quantity}</p>
                    </div>
                    )} 
                <p>Total price: U$S {totalPrice} </p>
            </div>
            <Link to={'/'} className="btn btn-outline-dark"> Go back tu shopping </Link>
        </div>
    )
}

export default Summary;