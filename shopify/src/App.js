import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterPage from './components/layout/materPage';
import ShopCatagory from './components/pages/shopCatagory';
import ProductDetail from './components/pages/productDetail';
import ProductCheckout from './components/pages/productCheckout';
import OrderConfirmation from './components/pages/orderConfirmation';
import Cart from './components/pages/shoppind_cart';
import MyBlog from './components/blog/myBlog';
import BlogDetail from './components/blog/blogDetail';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Tracking from './components/auth/tracking';
import Contact from './components/pages/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MasterPage/>} >
          <Route path='/' element={<Home/>}/>
          <Route path='/shopcatagory' element={<ShopCatagory/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/productcheckout' element={<ProductCheckout/>}/>
          <Route path='/confirmation' element={<OrderConfirmation/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/blog' element={<MyBlog/>}/>
          <Route path='/blogdetail' element={<BlogDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
