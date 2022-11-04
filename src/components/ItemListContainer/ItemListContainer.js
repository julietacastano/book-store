import './ItemListContainer.css'
import {useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getproducts } from '../../services/firestore/products';
import {useAsync} from '../../hooks/useAsync';

const ItemListContainer = () =>{

    const {categoryId} = useParams();
    const {setNotification} = useContext(NotificationContext);


    const getProductsCategory = () => getproducts(categoryId)

    const {data:products,loading, error} = useAsync(getProductsCategory, [categoryId])
    
    if (loading){
        return <div className="spinner-border m-5"></div>
    }
    if(error){
        return setNotification('error loading products', 'error')
    }


    return (
        <div>   
            <h5 className='tituloProd'>ALL PRODUCTS</h5>
            <ItemList array={products}/>
        </div>
    )
}

export default ItemListContainer