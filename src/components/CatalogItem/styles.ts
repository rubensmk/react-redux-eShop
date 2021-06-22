import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 20px;
  margin: 20px 20px;
  width: 300px;
  height: 400px;

  strong {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: #383c6b;
  }
  img {
    width: 300px;
    height: 280px;
  }
  div.buysection {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  span {
    font-size: 28px;
    color: #383c6b;
  }
  button {
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
  }
`;
