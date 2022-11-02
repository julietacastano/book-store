import {useState, useEffect, useContext} from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {setNotification} = useContext(NotificationContext);

    const {productId} = useParams();

    useEffect(() =>{
        const docRef = doc(db,'products', productId)

        getDoc(docRef).then((resp) => {
            const data = resp.data()
            const productAdapt = {id:resp.id, ...data}
            setProduct(productAdapt);
        }).catch(()=>{
            console.log('error loading product')
            setNotification('error loading product', 'error')
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