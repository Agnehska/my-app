
import './App.css';
import { useEffect,useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Products from './components/Products';
import Registration from './components/Registration';
import Login from './components/Login';
import Order from './components/Order';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [isAuth,setIsAuth] = useState(true)
  const [activeUser, setActiveUser] = useState('43ae')

  return (
    <div className="App">
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path='/' element={<Products isAuth={isAuth} activeUser={activeUser}/>} />
        <Route path='/reg' element={<Registration setIsAuth={setIsAuth}/>} />
        <Route path='/log' element={<Login setIsAuth={setIsAuth} setActiveUser={setActiveUser}/>} />        
        <Route path='/order' element={<Order activeUser={activeUser}/>} />
        <Route path='/cart' element={<Cart activeUser={activeUser}/>} />
    </Routes>
    </div>
  );
}

export default App;
