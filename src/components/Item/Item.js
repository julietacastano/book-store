import { Link } from "react-router-dom";

const Item = ({id, img, name, price}) =>{
    return(
        <div className="card">
            <Link to={`/detail/${id}`}><img src={img} alt={name} className="cardImg" /></Link>  
            <div className="card-body">
                <Link to={`/detail/${id}`} className='cardName'>{name}</Link>  
                <p>US$ {price}</p>
                <Link to={`/detail/${id}`} className="btn btn-outline-primary">Details</Link>  
            </div>
        </div>

    )
}

export default Item;