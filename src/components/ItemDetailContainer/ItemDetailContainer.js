import {useState, useEffect} from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getProductById('4').then((resp) => {
            setProduct(resp);
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    if (loading === true){
        return <div className="spinner-border m-5"></div>
    }

    console.log(product)

    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )


}

export default ItemDetailContainer;