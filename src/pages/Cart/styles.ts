/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;

  margin-top: 40px;
  width: 100%;
  min-height: 800px;

`
export const CartItems = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  width: 80%;
  border-radius: 5px;
  height: 700px;

  h3{
    margin-left: 20px;
    margin-top:16px;
    font-size: 36px;
    color: #383c6b;
  }
  h2{
    margin-left: 20px;
    font-size: 32px;
    color: #383c6b;
  }
  div{
    overflow: auto;
    margin:16px 20px;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;

  img{
    width: 100px;
    height: 80px;
    border-radius:10px;
  }

  div{
    margin-left: 16px;
    width: 430px;
    max-width:100%;

    strong{
    width: 100%;
    font-size: 20px;
    font-weight: normal;
    color: #3d3d3d;
    }

    section{
      display: flex;

      p{
      margin-top: 7px;
      font-size: 15px;
      color: #999;
      }

      span{
      width: 140px;
      display: flex;
      align-items: center;
      justify-content:center;
      color:#3d3d3d;
      }
    }
  }

  h3{
    margin-left: 80px;
    font-size: 22px;
  }
`;

