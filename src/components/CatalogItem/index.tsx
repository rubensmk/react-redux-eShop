/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IState } from '../../store';
import { Container } from './styles';

interface CatalogItemProps {
  product: IProduct;
}
const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  return (
    <Container>
      <strong>{product.title}</strong>
      <img src={product.image} alt={product.title} />
      <div className="buysection">
        <span>R${product.price}</span>
        <button type="button" onClick={handleAddProductToCart}>
          Comprar
        </button>
      </div>
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}> Falta do estoque</span>
      )}
    </Container>
  );
};

export default CatalogItem;
