import carrito from './assets/carrito.png'

const CartWidget = () =>{
    return(
        <button className = "btn btn-light btn-carrito"><img src= {carrito} alt="carrito" className = "carrito" /> Items: 0</button>
    )
}

export default CartWidget;