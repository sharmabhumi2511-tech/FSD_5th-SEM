import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';

export default function App() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(products);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products products={products} />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}