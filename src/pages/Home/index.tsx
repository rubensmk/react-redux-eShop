import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../../components/CatalogItem';
import api from '../../services/api';

import { Catalog } from './styles';

const Home: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
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
