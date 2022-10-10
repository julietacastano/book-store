import { Link } from "react-router-dom";

const Item = ({id, img, name, price}) =>{
    return(
        <div className="card">
            <img src={img} alt={name} />
            <div className="card-body">
                <h6>{name}</h6>  
                <p>US$ {price}</p>
                <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver</Link>  
            </div>
        </div>

    )
}

export default Item;