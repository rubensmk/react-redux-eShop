import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { Cart } from './styles';

const CartButton = (): JSX.Element => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  let totalQuantity = 0;

  cart.map(item => {
    totalQuantity += item.quantity;
    return totalQuantity;
  });

  return (
    <Cart to="/cart">
      <div className="icon">
        <MdShoppingBasket size={36} color="#FFAC00" />
      </div>
      <div>
        <strong>My Cart</strong>
        <span>{totalQuantity} products</span>
      </div>
    </Cart>
  );
};

export default CartButton;
