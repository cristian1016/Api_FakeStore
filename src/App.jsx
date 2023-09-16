import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    setCartCount(cartCount - product.quantity);
  };

  return (
    <div>
      <Header cartCount={cartCount} cart={cart} removeFromCart={removeFromCart} />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>+</button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
