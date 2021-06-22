import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import { CartItems, Container, Item } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <>
      <Header />
      <Container>
        <CartItems>
          {cart.map(item => (
            <Item>
              <img
                src={item.product.image}
                alt={item.product.title}
                style={{ width: 120, height: 120 }}
              />
              <strong>{item.product.title}</strong>
              <span>{item.product.price}</span>
              <p>{item.quantity}</p>
              <h3>{(item.quantity * item.product.price).toFixed(2)}</h3>
            </Item>
          ))}
        </CartItems>
      </Container>
    </>
  );
};

export default Cart;
