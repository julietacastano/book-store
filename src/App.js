import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from '../src/context/CartContext';
import { NotificationProvider } from './Notification/Notification';

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element= {<ItemDetailContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h3 className='error'>404 - PRODUCT NOT FOUND</h3>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>  
      </NotificationProvider>
    </div>
  );
}

export default App;
