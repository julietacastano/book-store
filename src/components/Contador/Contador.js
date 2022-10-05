import { useState } from 'react';


const Contador = () => {
    const [count, setCount] = useState(0);

    const sumar = () =>{
        if (count < 7){
            setCount(count+1)
        }
    }
    const restar = () =>{
        if (count > 0){
            setCount(count-1)
        }
    } 

    return(
        <div>
            <h4>Contador</h4>
            <h5>{count}</h5>
            <button onClick={sumar} className="btn btn-dark">+</button>
            <button onClick={restar} className="btn btn-dark"> - </button> 

        </div>
    )
}

export default Contador;