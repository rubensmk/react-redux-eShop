/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 100%;

`
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #ffffff;
  border-radius:15px;
  width: 900px;
  min-height: 600px;
  max-height: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;

  border: 1px solid #3d3d3d;
  background: #ffffff;
  border-radius:15px;
  width: 700px

`;

