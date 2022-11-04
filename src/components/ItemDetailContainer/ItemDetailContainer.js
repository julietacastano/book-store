import {useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProduct } from '../../services/firestore/products';
import {useAsync} from '../../hooks/useAsync';

const ItemDetailContainer = () =>{

    const {productId} = useParams()
    const {setNotification} = useContext(NotificationContext);

    const getProductId = () => getProduct(productId)

    const {data:product,loading, error} = useAsync(getProductId, [productId])
    
    if (loading === true){
        return <div className="spinner-border m-5"></div>
    }
    if(error){
        return setNotification('error loading product', 'error')
    }

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )


}

export default ItemDetailContainer;