import './Navbar.css';
import logo from './assets/logo.png'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="nav">
            <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo" /></NavLink>
            <div>
                <NavLink to={'/category/Fiction'} className= {({isActive}) => isActive ? 'btn btn-secondary' : 'btn btn-light'}>Fiction</NavLink>
                <NavLink to={'/category/Romance'} className={({isActive}) => isActive ? 'btn btn-secondary' : 'btn btn-light'}>Romance</NavLink>
                <NavLink to={'/category/Thriller'} className={({isActive}) => isActive ? 'btn btn-secondary' : 'btn btn-light'}>Thriller</NavLink>
                <NavLink to={'/category/Non-Fiction'} className={({isActive}) => isActive ? 'btn btn-secondary' : 'btn btn-light'}>Non-Fiction</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;