import './ItemListContainer.css'
import {useState, useEffect, useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    const {setNotification} = useContext(NotificationContext);

    useEffect(() =>{
        setLoading(true);
        
        const collectionRef = categoryId 
            ?  query(collection(db,'products'), where('category', '==', categoryId))
            : collection(db,'products')

        getDocs(collectionRef).then(resp => {
            const productAdapt = resp.docs.map(doc => {
                const data = doc.data()
                return {id:doc.id, ...data}
            });
            setProducts(productAdapt)
        }).catch(()=>{
            console.log('error loading products')
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