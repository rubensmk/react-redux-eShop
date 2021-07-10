/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../store/modules/cart/types';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IState } from '../../store';
import { Container, Title, BuySection, Button } from './styles';
import { formatPrice } from '../../utils/formatPrice';

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
      <Title>{product.title}</Title>
      <img src={product.image} alt={product.title} />
      <BuySection>
        <span>{formatPrice(product.price)}</span>
        <Button
          type="button"
          onClick={handleAddProductToCart}
          hasFailedStockCheck={hasFailedStockCheck}
        >
          {hasFailedStockCheck ? 'Esgotado' : 'Comprar'}
        </Button>
      </BuySection>
    </Container>
  );
};

export default CatalogItem;
