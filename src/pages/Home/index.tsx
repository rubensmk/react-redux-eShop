import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from '../../components/Header';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../../components/CatalogItem';

import { Catalog } from './styles';

const Home: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then(response => {
      setCatalog(response.data);
    });
  }, []);
  return (
    <>
      <Header />
      <Catalog>
        {catalog.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Catalog>
    </>
  );
};

export default Home;
