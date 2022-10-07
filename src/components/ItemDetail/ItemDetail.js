import './ItemDetail.css'
import Contador from '../Contador/Contador'

const ItemDetail = ({name, price, category, img, description}) =>{
    return(
        <div className="cardDetail">
            <div className="cardDetailLeft">
                <img src={img} alt={name}/> 
                <button className="btnDetail btn btn-outline-success"> Agregar al carrito</button>
            </div>
            <div className="cardDetailRight">
                <h3 className='blockquote'>{name}</h3>
                <p className='blockquote-footer'>{category}</p>
                <p className='descrption'>{description}</p>
                <h5>US$ {price}</h5>
                <Contador /> 
            </div>
        </div>
    )

}

export default ItemDetail;