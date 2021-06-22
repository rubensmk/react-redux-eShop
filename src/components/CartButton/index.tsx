import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Cart } from './styles';

const CartButton = (): JSX.Element => {
  return (
    <Cart>
      <div className="icon">
        <MdShoppingBasket size={36} color="#FFAC00" />
      </div>
      <div>
        <strong>Meu carrinho</strong>
        <span>2 produtos</span>
      </div>
    </Cart>
  );
};

export default CartButton;
