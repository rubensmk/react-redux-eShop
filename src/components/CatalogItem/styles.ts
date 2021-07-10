import styled, { css } from 'styled-components';

interface ButtonProps {
  hasFailedStockCheck: boolean;
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 10px;
  margin: 20px 20px;
  width: 280px;
  height: 320px;

  img {
    width: 120px;
    height: 140px;
  }
`;

export const Title = styled.strong`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #383c6b;
  margin-bottom: 10px;
`;

export const Button = styled.button<ButtonProps>`
  margin-left: 40px;
  border: 0;
  background: #ffac00;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }

  ${props =>
    props.hasFailedStockCheck &&
    css`
      background: #9999;
      cursor: not-allowed;
      &:hover {
        filter: brightness(1);
      }
    `}
`;

export const BuySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;

  span {
    font-size: 22px;
    color: #383c6b;
  }
`;
