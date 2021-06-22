import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Cart } from './styles';

const CartButton = (): JSX.Element => {
  return (
    <Cart to="/cart">
      <div className="icon">
        <MdShoppingBasket size={36} color="#FFAC00" />
      </div>
      <div>
        <strong>My Cart</strong>
        <span>2 products</span>
      </div>
    </Cart>
  );
};

export default CartButton;
