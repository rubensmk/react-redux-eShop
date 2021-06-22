import React from 'react';
import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';
import Header from '../../components/Header';

const PageExample: React.FC = () => {
  return (
    <>
      <Header />
      <Catalog />
      <Cart />
    </>
  );
};

export default PageExample;
