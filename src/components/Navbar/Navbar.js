import './Navbar.css';
import logo from './assets/logo.png'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <nav className="nav">
            <img src= {logo} alt="Logo" className="logo" />
            <div>
                <button className="btn btn-light">On the go</button>
                <button className="btn btn-light">Decoracion</button>
                <button className="btn btn-light">Cuidado personal</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;