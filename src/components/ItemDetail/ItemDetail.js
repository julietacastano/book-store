import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useContext, useState } from 'react'
import { Link } from "react-router-dom"; 
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, price, category, img, description, stock}) =>{
    const [button, setButton] = useState('carrito')
    const {addItem} = useContext(CartContext)

    const handleOnAdd= (quantity) =>{
        const productToAdd = {id,name,price,quantity};
        addItem(productToAdd);
        setButton('yaAgregue');
    }

    const Agregado = () => {
        return(
            <div className='agregado'>
                <Link to={'/'} className="btnSeguir btn btn-outline-secondary">Continue Shopping</Link>
                <Link to={'/cart'} className="btnCarrito btn btn-outline-primary">Go to Cart</Link>
            </div>
            
        )
    }
    const ButtonSwitch = button === 'carrito' ? Counter  : Agregado; 

    return(
        <div className="cardDetail">
            <div className="cardDetailInfo">
                <div className="cardDetailImg">
                    <img src={img} alt={name}/> 
                </div>
                <div className="cardDetailText">
                    <h3 className='blockquote'>{name}</h3>
                    <p className='blockquote-footer'>{category}</p>
                    <h4>US$ {price}</h4>
                    <ButtonSwitch stock={stock} onAdd={handleOnAdd}/>
                </div>
            </div>
            <div className='cardDescrip'>
                <h5>Desctription</h5>
                <p className='descrption'>{description}</p>
            </div>
        </div>
    )

}

export default ItemDetail;