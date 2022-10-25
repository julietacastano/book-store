import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Counter = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);

    const sumar = () =>{
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }
    const restar = () =>{
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    } 

    return(
        <div className='contador'>
            <p className='tituloContador'>Quantity: </p>
            <div className='contadorQuantity'>
                <button onClick={restar} className="btn btn-outline-dark btn-sm"><FontAwesomeIcon icon={faMinus} /></button> 
                <h5>{quantity}</h5>
                <button onClick={sumar} className="btn btn-outline-dark btn-sm"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <div>
                <button className="btnDetail btn btn-outline-success" onClick={() => onAdd(quantity)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Counter;