import {useState, useEffect, useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from '../../services/firestore/products';

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {setNotification} = useContext(NotificationContext);

    const {productId} = useParams();

    useEffect(() =>{
        getProduct(productId).then(prod=>{
            setProduct(prod)
        }).catch(()=>{
            setNotification('error loading products', 'error')
        }).finally(()=>{
            setLoading(false)
        })
    },[productId])//eslint-disable-line

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