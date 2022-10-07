import { useState } from 'react';
import { getProductById } from '../../asyncMock';

const Contador = () => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(0)
    
    getProductById('4').then((resp) =>{
        setStock(resp.stock);    
    })
    
    const sumar = () =>{
        if (count < stock){
            setCount(count+1)
        }
    }
    const restar = () =>{
        if (count > 0){
            setCount(count-1)
        }
    } 

    return(
        <div className='contador'>
            <button onClick={restar} className="btn btn-outline-dark"> - </button> 
            <h5>{count}</h5>
            <button onClick={sumar} className="btn btn-outline-dark">+</button>
        </div>
    )
}

export default Contador;