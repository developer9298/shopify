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
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/admin/dashboard';
import AddCatagory from './components/category/addCatagory';
import AddProduct from './components/category/addProduct';
import AddSubCatagory from './components/category/addSubCatagory';
import GetSubCatagory from './components/category/getSubCatagory';
import EditSubCategory from './components/category/editSubCatagory';
import EditCatagory from './components/category/editCatagory';
import AllProduct from './components/pages/allProduct';
import EditProfile from './components/auth/editProfile';
import ChangePassword from './components/auth/changePassword';
import SubProduct from './components/pages/subProducts';
import EditProduct from './components/pages/editProduct';
import Users from './components/pages/users';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MasterPage />} >
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
           
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/changePassword' element={<ChangePassword />} />
            <Route path='/shopcatagory' element={<ShopCatagory />} />
            <Route path='/productdetail/:id' element={<ProductDetail />} />
            <Route path='/productcheckout/:id' element={<ProductCheckout />} />
            <Route path='/confirmation' element={<OrderConfirmation />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/blog' element={<MyBlog />} />
            <Route path='/subProduct' element={<SubProduct />} />
            <Route path='/blogdetail' element={<BlogDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tracking' element={<Tracking />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/addcatagory" element={<AddCatagory />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/addsubcatagory" element={<AddSubCatagory />} />
            <Route path="/getsubcatagory" element={<GetSubCatagory />} />
            <Route path="/editsubcatagory/:id" element={<EditSubCategory />} />
            <Route path="/editcatagory/:id" element={<EditCatagory />} />
            <Route path="/allproducts" element={<AllProduct />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path='/editProduct/:id' element={<EditProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
