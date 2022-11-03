import { useState, createContext, useContext, useEffect } from "react";
import { NotificationContext } from "../Notification/Notification";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const {setNotification} = useContext(NotificationContext) 

    useEffect(()=>{
        const totalQ = getQuantity();
        setTotalQuantity(totalQ)

        const totalP = getPrice();
        setTotalPrice(totalP)
    },[cart]) //eslint-disable-line

    const addItem = (productToAdd) =>{  
        if( isInCart(productToAdd.id)){
            const cartUpdate = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    return ({...productToAdd, quantity:productToAdd.quantity})
                } else {return prod}
            })
            setCart(cartUpdate)
            setNotification('Quantity of item in cart changed ', 'error')
        }else{
            setCart([...cart, productToAdd])
            setNotification('Item added to your cart', 'success')
        }
    }
    const isInCart = (id) =>{ return cart.some(prod => prod.id === id)}

    const getQuantity = () =>{
        let acc = 0
        cart.forEach(prod => {acc += prod.quantity})

        return acc
    }

    const getPrice = () =>{
        let acc = 0
        cart.forEach(prod => {acc += (prod.price*prod.quantity)})

        return acc
    }

    const emptyCart = () =>{
        setCart([])
    }

    const deleteProd = (id) =>{
        const cartWithoutProd = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProd)
    }

    const getQuantityProd = (id) =>{
        const product = cart.find(prod => prod.id === id)

        if (product){
            return product.quantity
        } 
    }

    return(
        <CartContext.Provider value={{cart, addItem, totalQuantity, totalPrice, emptyCart, deleteProd, getQuantityProd}}>
            {children}
        </CartContext.Provider>
    )
    

}