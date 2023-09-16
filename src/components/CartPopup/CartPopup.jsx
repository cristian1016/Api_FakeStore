import React from 'react';
import './CartPopup.css';

function CartPopup({ cart, onClose, removeFromCart }) {
  return (
    <div className="cart-popup">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity}
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default CartPopup;
