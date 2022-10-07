import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () =>{
    return(
        <button className = "btn btn-light btn-carrito"><FontAwesomeIcon icon={faCartShopping}/> Items: 0</button>
    )
}

export default CartWidget;