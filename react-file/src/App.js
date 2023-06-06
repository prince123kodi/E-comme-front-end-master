import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './container/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Products from './container/Product'
import Singleproduct from './container/Singleproduct';
import Addtocart from './container/Addtocart';
import Checkout from './container/Checkout';
import Login from './container/Login';
import Register from './container/Register';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products/:category" element={<Products/>} />
          <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
          <Route path="/add_cart/:id" element={<Addtocart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
