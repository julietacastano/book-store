import './ItemListContainer.css'
import {useState, useEffect, useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getproducts } from '../../services/firestore/products';

const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    const {setNotification} = useContext(NotificationContext);

    useEffect(() =>{
        setLoading(true);
        
        getproducts(categoryId).then(prod=>{
            setProducts(prod)
        }).catch(()=>{
            setNotification('error loading products', 'error')
        }).finally(()=>{
            setLoading(false)
        })

    },[categoryId])//eslint-disable-line

    if (loading){
        return <div className="spinner-border m-5"></div>
    }
    
    return (
        <div>   
            <h5 className='tituloProd'>ALL PRODUCTS</h5>
            <ItemList array={products}/>
        </div>
    )
}

export default ItemListContainer