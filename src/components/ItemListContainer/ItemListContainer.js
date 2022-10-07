import './ItemListContainer.css'
import {useState, useEffect} from 'react';
import { getProducts } from "../../asyncMock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () =>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        console.log(getProducts())
        getProducts().then((resp) => {
            setProducts(resp);
        }).finally(()=>{
            setLoading(false)
        })
    },[])

    if (loading === true){
        return <div className="spinner-border m-5"></div>
    }

    return (
        <div>
            <h5 className='tituloProd'>LISTADO DE PRODUCTOS</h5>
            <ItemList array={products}/>
        </div>
    )
}

export default ItemListContainer;