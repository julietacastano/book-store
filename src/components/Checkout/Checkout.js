import './Checkout.css'
import Form from "../Form/Form";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import { NotificationContext } from '../../Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Checkout = () =>{
    const {cart, totalPrice, emptyCart} = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const [data, setData] = useState({
            firstName:'',
            lastName:'',
            email:'',
            phone: '',
        });
    const handleInputChange =(event) =>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }
    
    const createOrder = async (event) =>{
        event.preventDefault()
        setLoading(true)

        try{
            const objOrder = {...data,Items:cart,TotalPrice:totalPrice}
            console.log(objOrder)

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod=> prod.id)

            const productRef = collection(db,'products')

            //Traigo los productos que estan en el cart de Firebase 
            const prodCartFromFirebase = await getDocs(query(productRef, where(documentId(),'in',ids)))
            
            const {docs} = prodCartFromFirebase

            docs.forEach(doc => {
                //Veo el stock de Firebase
                const docData = doc.data()
                const stockbd = docData.stock

                //Busco el producto que quiero en el carrito 
                const productCart = cart.find(prod => prod.id === doc.id)
                //Veo la cantidad del producto agregada
                const prodCartQuantity = productCart?.quantity

                if(stockbd >= prodCartQuantity){
                    //Actualizo la base de datos
                    batch.update(doc.ref, {stock: stockbd - prodCartQuantity})
                }else{
                    outOfStock.push({id:doc.id, ...docData})
                }

            })
            if (outOfStock.length === 0){
                await batch.commit()
                
                const orderRef = collection(db,'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(orderAdded)

                emptyCart()

                setTimeout(() =>{
                    navigate('/summary')
                },3000)

                setNotification(`Your order number is ${orderAdded.id}` , 'success')

            }else{
                setNotification('There are products out of stock','error')
            }

        }catch (error){
            console.log(error)
        } finally{setLoading(false)}
    }
    
    if (loading === true){
        return <div> Generating Order... </div>
    }


    return (
        <div className="checkout">
            <h4>Checkout</h4>
            <div>
                <p>Your Order</p>
                    {cart.map(prod=>
                    <div key={prod.id}>
                        <p>{prod.name}</p>
                        <p>{prod.price}</p>
                        <p> {prod.quantity} </p>
                        <p>{totalPrice}</p>
                    </div>
                    )} 
            </div>
            <Form onChange={handleInputChange} purchase={createOrder}  />
        </div>
    )
}

export default Checkout;