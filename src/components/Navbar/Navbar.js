import './Navbar.css';
import logo from './assets/logo.png'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { NotificationContext } from '../../Notification/Notification';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';


const Navbar = () => {
    const [categoy, setCategory] = useState([]);
    const {setNotification} = useContext(NotificationContext);

    useEffect(() =>{
        const collectionRef = collection(db,'categories')
        
        getDocs(collectionRef).then(resp =>{
            const categoriesAddapt = resp.docs.map(doc =>{
                const data = doc.data();
                return({id:doc.id, ...data})
            })
            setCategory(categoriesAddapt)
        }).catch(()=>{
            setNotification('error loading products', 'error')
        })
    },[])//eslint-disable-line
    
    return(
        <nav className="nav">
            <NavLink to={'/'}><img src= {logo} alt="Logo" className="logo" /></NavLink>
            <div>
                {categoy.map(category =>
                    <NavLink key={category.id} to={`/category/${category.slug}`} className= {({isActive}) => isActive ? 'btn btn-secondary' : 'btn btn-light'}> {category.label} </NavLink>
                    )}
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;