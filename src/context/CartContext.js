import { useState, createContext, useContext } from "react";
import { NotificationContext } from "../Notification/Notification";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const {setNotification} = useContext(NotificationContext) 

    const addItem = (productToAdd) =>{
        if( isInCart(productToAdd.id)){
        console.log('ya esta en el carrito') 
        setNotification('Item already in cart, please remove and add again', 'error')
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

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getPrice, emptyCart, deleteProd}}>
            {children}
        </CartContext.Provider>
    )
    

}