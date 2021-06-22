import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  div.icon {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #383c6b;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #3d3d3d;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
