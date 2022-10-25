import './ItemListContainer.css'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from "../../asyncMock";
import { getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() =>{
        setLoading(true);
        
        const asyncFunction = categoryId ? getProductByCategory : getProducts;

        asyncFunction(categoryId).then((resp) => {
            setProducts(resp);
        }).finally(()=>{
            setLoading(false)
        })
    },[categoryId])

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

export default ItemListContainer;