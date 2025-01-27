import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Layout from './Components/Layout';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Shop from './Pages/Shop';
import ProductDetail from './Components/ProductDetail';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Profile from './Pages/Profile';
import ChangePassword from './Pages/ChangePassword';
import AddProduct from './Pages/AddProduct';
import ResetPassword from './Pages/ResetPassword';
import P_Details from './Components/P_Details';
import Cart from './Pages/Cart';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<div>Account Page</div>} />
                <Route path="/wishlist" element={<div>Wishlist Page</div>} />
                <Route path="/order-tracking" element={<div>Order Tracking Page</div>} />
                <Route path="/deals" element={<div>No Deals.😂🤣</div>} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/vendors" element={<div>Vendors Page</div>} />
                <Route path="/mega-menu" element={<div>Mega Menu Page</div>} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/pages" element={<div>Pages</div>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<P_Details />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Layout>
    );
}

export default App;