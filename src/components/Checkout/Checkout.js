import './Checkout.css'
import Form from "../Form/Form";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, documentId, getDocs, query, where, writeBatch} from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import { NotificationContext } from '../../Notification/Notification';
import { useNavigate } from 'react-router-dom';


const Checkout = () =>{
    const {cart, totalPrice, emptyCart, deleteProd} = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const [oderData, setOrderData] = useState({
            firstName:'',
            lastName:'',
            email:'',
            phone: '',
        });
    const handleInputChange =(event) =>{
        setOrderData({
            ...oderData,
            [event.target.name] : event.target.value
        })
    }


    const createOrder = async (event) =>{
        event.preventDefault()
        setLoading(true)

        try{
            const objOrder = {...oderData,Items:cart,TotalPrice:totalPrice}

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod=> prod.id)

            const productRef = collection(db,'products')

            const prodCartFromFirebase = await getDocs(query(productRef, where(documentId(),'in',ids)))
            
            const {docs} = prodCartFromFirebase

            docs.forEach(doc => {
                const docData = doc.data()
                const stockbd = docData.stock

                const productCart = cart.find(prod => prod.id === doc.id)
                const prodCartQuantity = productCart?.quantity

                if(stockbd >= prodCartQuantity){
                    batch.update(doc.ref, {stock: stockbd - prodCartQuantity})
                }else{
                    outOfStock.push({id:doc.id, ...docData})
                }

            })
            if (outOfStock.length === 0){
                await batch.commit()
                
                const orderRef = collection(db,'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                emptyCart()

                setTimeout(() =>{
                    navigate('/')
                },4000)

                setNotification(`Your order number is ${orderAdded.id}` , 'success')

            }else{
                const idOutOfStock = outOfStock.find(prod=>prod.id)
                const idFound = idOutOfStock.id
                deleteProd(idFound)
                
                setNotification('There are products out of stock','error')

            }
        }catch{
            setNotification('Error in creating order','error')
        } finally{setLoading(false)}
    }

    if (loading === true){
        return <div> Generating Order... </div>
    }

    return (
        <div className="checkout">
            <h4>Checkout</h4>
            <div className='text-start'>
                <p><ins>Your Order</ins></p>
                    {cart.map(prod=>
                    <div key={prod.id}>
                        <p>{prod.name} - quantity: {prod.quantity}</p>
                    </div>
                    )} 
                <p>Total price: U$S {totalPrice} </p>
            </div>
            <Form onChange={handleInputChange} purchase={createOrder}  />
        </div>
    )
}

export default Checkout;