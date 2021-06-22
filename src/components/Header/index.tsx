import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { Container, Logo, Nav } from './styles';
import CartButton from '../CartButton';

const Header = (): JSX.Element => {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>
          <img src={logoImg} alt="Brechó" />
          <h3>e-SHOP</h3>
        </Logo>
      </Link>
      <Nav>
        <strong>Home</strong>
        <strong>Account</strong>
        <strong>Settings</strong>
      </Nav>
      <CartButton />
    </Container>
  );
};

export default Header;
