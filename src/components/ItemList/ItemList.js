import Item from "../Item/Item"

const ItemList = ({array}) =>{
    return(
        <div  className="cardsList">
            {array.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;