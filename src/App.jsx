import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/bootstrap.min.css'
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Order from './components/Order';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [userToken, setUserToken] = useState('')

  return (
    <div className="container py-3">
      <Header isAuth={isAuth} setIsAuth={setIsAuth} setUserToken={setUserToken}/>
      <Routes>
        <Route element={<Product isAuth={isAuth} userToken={userToken}/>} path='/'/>
        <Route element={<Login isAuth={isAuth} setIsAuth={setIsAuth} setUserToken={setUserToken} />} path='/login'/>
        <Route element={<Register isAuth={isAuth} setIsAuth={setIsAuth} setUserToken={setUserToken} />} path='/signup'/>
        <Route element={<Cart isAuth={isAuth} userToken={userToken}/>} path='/cart'/>
        <Route element={<Order isAuth={isAuth} userToken={userToken}/>} path='/order'/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
