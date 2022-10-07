import './Navbar.css';
import logo from './assets/logo.png'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return(
        <nav className="nav">
            <img src= {logo} alt="Logo" className="logo" />
            <div>
                <button className="btn btn-light">Fiction</button>
                <button className="btn btn-light">Romance</button>
                <button className="btn btn-light">Thriller</button>
                <button className="btn btn-light">Non-Fiction</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;