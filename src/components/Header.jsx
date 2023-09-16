import React, { useState } from 'react';
import './Header.css';
import CartPopup from './CartPopup/CartPopup';

const img_carrito = 'https://cdn-icons-png.flaticon.com/256/2420/2420157.png'

function Header({ cartCount, cart, removeFromCart }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
        <div className='center_header'>
      <h1>Store Caps</h1>
      <div className="cart">
        <span onClick={toggleCart}><img src= {img_carrito} alt="imagen del carrito de compra" /> {cartCount}</span>
      </div>
      {isCartOpen && (
        <CartPopup
          cart={cart}
          onClose={toggleCart}
          removeFromCart={removeFromCart}
        />
      )}
      </div>
    </header>
  );
}

export default Header;
