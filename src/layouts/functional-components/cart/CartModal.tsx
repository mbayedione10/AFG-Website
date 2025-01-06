
import React from 'react';
import { useStore } from '@nanostores/react';
import { cartIsOpen, cart } from '@/cartStore';

const CartModal = () => {
  const isOpen = useStore(cartIsOpen);
  const cartItems = useStore(cart);

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button onClick={() => cartIsOpen.set(false)}>Close</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item: any) => (
          <div key={item.id} className="cart-item">
            <span>{item.title}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartModal;
