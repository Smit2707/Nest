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

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/account" element={<div>Account Page</div>} />
                <Route path="/wishlist" element={<div>Wishlist Page</div>} />
                <Route path="/order-tracking" element={<div>Order Tracking Page</div>} />
                <Route path="/deals" element={<div>Deals Page</div>} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/vendors" element={<div>Vendors Page</div>} />
                <Route path="/mega-menu" element={<div>Mega Menu Page</div>} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/pages" element={<div>Pages</div>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Layout>
    );
}

export default App;