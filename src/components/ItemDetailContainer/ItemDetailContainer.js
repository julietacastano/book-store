import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

    useEffect(() =>{
        getProductById(productId).then((resp) => {
            setProduct(resp);
        }).finally(()=>{
            setLoading(false)
        })
    },[productId])

    if (loading === true){
        return <div className="spinner-border m-5"></div>
    }

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )


}

export default ItemDetailContainer;