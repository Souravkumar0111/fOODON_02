import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from '../Pages/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from '../Pages/Signup.jsx'
import { CartProvider } from '../Components/ContextReducer.jsx'
import MyOrder from '../Pages/MyOrder.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
    <Router>
      <div>
         <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/createuser" element={<Signup/>}/>
          <Route exact path="/myOrder" element={<MyOrder/>}/>
         </Routes>
       </div>
    </Router>
    </CartProvider>
  );
}

export default App
