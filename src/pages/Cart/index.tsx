import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';
import { formatPrice } from '../../utils/formatPrice';

import { CartItems, Container, Item } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <>
      <Header />
      <Container>
        <CartItems>
          <h3>Cart</h3>
          <div>
            {cart.map(item => (
              <Item>
                <img src={item.product.image} alt={item.product.title} />
                <div>
                  <strong>{item.product.title}</strong>
                  <section>
                    <p>Quantidade: {item.quantity}</p>
                    <span>{formatPrice(item.product.price)}</span>
                  </section>
                </div>
                <h3>{formatPrice(item.quantity * item.product.price)}</h3>
              </Item>
            ))}
          </div>
          <h2>Total</h2>
        </CartItems>
      </Container>
    </>
  );
};

export default Cart;
