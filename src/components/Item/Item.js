const Item = ({img, name, price}) =>{
    return(
        <div className="card">
            <img src={img} alt={name} />
            <div className="card-body">
                <h6>{name}</h6>  
                <p>US$ {price}</p>
                <button type="button" className="btn btn-outline-primary">Ver</button>  
            </div>
        </div>

    )
}

export default Item;